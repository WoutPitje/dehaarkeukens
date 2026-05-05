#!/usr/bin/env bash
# Download stijl-images van de oude WordPress-site naar assets/, daarna commit + push.
# Run vanuit ~/projects/dehaarkeukens/.

set -e
cd "$(dirname "$0")"

B=$(tput bold); D=$(tput sgr0); G=$(tput setaf 2); Y=$(tput setaf 3); R=$(tput setaf 1)

echo "${B}Stijl-images synchroniseren${D}"
echo

# 6 categorieën → bron-URL → lokale naam
declare -a JOBS=(
  "Modern|https://dehaarkeukens.nl/wp-content/uploads/2022/02/moderne_keuken.webp|assets/stijl-modern.webp"
  "Landelijk|https://dehaarkeukens.nl/wp-content/uploads/2022/02/landelijke_keuken.webp|assets/stijl-landelijk.webp"
  "Basic|https://dehaarkeukens.nl/wp-content/uploads/2021/12/strak.webp|assets/stijl-basic.webp"
  "Design|https://dehaarkeukens.nl/wp-content/uploads/2021/12/vt-wonen.webp|assets/stijl-design.webp"
  "Industrieel|https://dehaarkeukens.nl/wp-content/uploads/2022/02/industriele_keuken.webp|assets/stijl-industrieel.webp"
  "Romantisch|https://dehaarkeukens.nl/wp-content/uploads/2022/02/romantische-keuken.webp|assets/stijl-romantisch.webp"
)

for job in "${JOBS[@]}"; do
  IFS='|' read -r LABEL URL DST <<< "$job"
  printf "  %-12s → %s … " "$LABEL" "$DST"
  if curl -sSfL --max-time 30 "$URL" -o "$DST"; then
    SIZE=$(du -h "$DST" | cut -f1)
    echo "${G}✓${D} (${SIZE})"
  else
    echo "${R}mislukt${D}"
    exit 1
  fi
done

echo
echo "${G}✓${D} Alle 6 stijl-images opgehaald."
echo

# CBW-image checken (deze moet jij handmatig opslaan vanuit de chat)
if [ ! -f "assets/cbw-erkend.png" ] && [ ! -f "assets/cbw-erkend.webp" ] && [ ! -f "assets/cbw-erkend.jpg" ]; then
  echo "${Y}!${D} ${B}assets/cbw-erkend.png${D} (of .webp/.jpg) niet gevonden."
  echo "  Sla het CBW-badge plaatje uit onze chat op naar:"
  echo "  ${B}~/projects/dehaarkeukens/assets/cbw-erkend.png${D}"
  echo "  Daarna run je dit script opnieuw — of doe alleen de commit."
  echo
fi

# Stage + commit + push
echo "${B}Git: stage + commit + push${D}"
git add -A
if git diff --cached --quiet; then
  echo "${Y}!${D} Geen wijzigingen om te committen."
else
  git commit -m "Sync stijl-images uit oude site (lokale assets ipv externe URLs)"
fi

git push origin main 2>&1 | tail -5

echo
echo "${G}${B}Klaar.${D} GitHub Pages bouwt opnieuw — ~30-60 sec."

GH_USER=$(gh api user --jq .login 2>/dev/null || echo "")
if [ -n "$GH_USER" ]; then
  URL=$(gh api "/repos/$GH_USER/dehaarkeukens/pages" --jq .html_url 2>/dev/null || echo "")
  [ -n "$URL" ] && echo "Live: ${B}$URL${D}"
fi
