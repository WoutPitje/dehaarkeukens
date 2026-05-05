#!/usr/bin/env bash
# Lokale preview — download stijl-images (indien missend), start http.server,
# open browser. Geen git, geen push. Stop met Ctrl+C.

set -e
cd "$(dirname "$0")"

B=$(tput bold); D=$(tput sgr0); G=$(tput setaf 2); Y=$(tput setaf 3)
PORT=8000

# 6 categorieën die de site nodig heeft
declare -a JOBS=(
  "Modern|https://dehaarkeukens.nl/wp-content/uploads/2022/02/moderne_keuken.webp|assets/stijl-modern.webp"
  "Landelijk|https://dehaarkeukens.nl/wp-content/uploads/2022/02/landelijke_keuken.webp|assets/stijl-landelijk.webp"
  "Basic|https://dehaarkeukens.nl/wp-content/uploads/2021/12/strak.webp|assets/stijl-basic.webp"
  "Design|https://dehaarkeukens.nl/wp-content/uploads/2021/12/vt-wonen.webp|assets/stijl-design.webp"
  "Industrieel|https://dehaarkeukens.nl/wp-content/uploads/2022/02/industriele_keuken.webp|assets/stijl-industrieel.webp"
  "Romantisch|https://dehaarkeukens.nl/wp-content/uploads/2022/02/romantische-keuken.webp|assets/stijl-romantisch.webp"
)

echo "${B}Stijl-images checken/downloaden${D}"
for job in "${JOBS[@]}"; do
  IFS='|' read -r LABEL URL DST <<< "$job"
  if [ -f "$DST" ] && [ -s "$DST" ]; then
    printf "  %-12s ${G}✓${D} bestaat al\n" "$LABEL"
  else
    printf "  %-12s ↓ download… " "$LABEL"
    if curl -sSfL --max-time 30 "$URL" -o "$DST"; then
      echo "${G}✓${D}"
    else
      echo "${Y}mislukt${D} — sla over"
    fi
  fi
done
echo

# CBW-check
if [ ! -f "assets/cbw-erkend.png" ] && [ ! -f "assets/cbw-erkend.webp" ] && [ ! -f "assets/cbw-erkend.jpg" ]; then
  echo "${Y}!${D} ${B}assets/cbw-erkend.png${D} (of .webp/.jpg) ontbreekt nog."
  echo "  Sla 'm op vanuit de chat — anders zie je daar straks een gebroken plaatje."
  echo
fi

# Port check
if lsof -ti tcp:$PORT >/dev/null 2>&1; then
  echo "${Y}!${D} Poort $PORT is al in gebruik. Stop dat proces of gebruik een andere poort."
  exit 1
fi

URL_LOCAL="http://localhost:$PORT"

echo "${B}${G}Server start${D} op ${B}$URL_LOCAL${D}"
echo "Stop met ${B}Ctrl+C${D}"
echo

# Open browser na 1.5 sec — geeft de server tijd om te starten
( sleep 1.5 && open "$URL_LOCAL" ) &

# Server starten (blokkeert tot Ctrl+C)
python3 -m http.server $PORT
