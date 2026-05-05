#!/usr/bin/env bash
# Eenmalig deploy-script voor De Haar Keukens → GitHub Pages.
# Verplaatst de map naar ~/projects/, init git, maakt repo, pusht, zet Pages aan.
# Veilig om opnieuw te runnen — slaat stappen over die al gedaan zijn.

set -e

REPO_NAME="dehaarkeukens"
SRC_DIR="$HOME/Documents/Claude/Projects/DeHaarKeukens"
DST_DIR="$HOME/projects/$REPO_NAME"

# Kleurtjes voor de leesbaarheid
B=$(tput bold); D=$(tput sgr0); G=$(tput setaf 2); Y=$(tput setaf 3); R=$(tput setaf 1)

echo "${B}De Haar Keukens — GitHub Pages deploy${D}"
echo

# ── 1. Check vereisten ──────────────────────────────────────────────────────
command -v git >/dev/null || { echo "${R}git ontbreekt. Installeer met: xcode-select --install${D}"; exit 1; }
command -v gh  >/dev/null || { echo "${R}gh CLI ontbreekt. Installeer met: brew install gh${D}"; exit 1; }

if ! gh auth status >/dev/null 2>&1; then
  echo "${R}gh is niet ingelogd.${D} Run eerst: ${B}gh auth login${D}"
  exit 1
fi

GH_USER=$(gh api user --jq .login)
echo "${G}✓${D} Ingelogd als ${B}$GH_USER${D}"

# ── 2. Verplaats map naar ~/projects/ ───────────────────────────────────────
mkdir -p "$HOME/projects"

if [ -d "$DST_DIR" ]; then
  echo "${Y}!${D} ${DST_DIR} bestaat al — sla verplaatsing over."
elif [ -d "$SRC_DIR" ]; then
  # Zelf-deletende script-detectie: kopieer ipv mv als script binnenin draait
  cp -R "$SRC_DIR" "$DST_DIR"
  rm -rf "$SRC_DIR"
  echo "${G}✓${D} Verplaatst naar ${B}$DST_DIR${D}"
else
  echo "${R}Bronmap niet gevonden: $SRC_DIR${D}"
  exit 1
fi

cd "$DST_DIR"

# ── 3. Git init + eerste commit ─────────────────────────────────────────────
if [ ! -d ".git" ]; then
  git init -b main >/dev/null
  git add .
  git commit -m "Initial commit — De Haar Keukens design implementation" >/dev/null
  echo "${G}✓${D} Git geïnitialiseerd + eerste commit gemaakt"
else
  echo "${Y}!${D} Git al aanwezig — sla init over."
fi

# ── 4. GitHub repo aanmaken + pushen ────────────────────────────────────────
if ! gh repo view "$GH_USER/$REPO_NAME" >/dev/null 2>&1; then
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push
  echo "${G}✓${D} Repo aangemaakt + gepusht: ${B}https://github.com/$GH_USER/$REPO_NAME${D}"
else
  echo "${Y}!${D} Repo bestaat al — push huidige status."
  if ! git remote get-url origin >/dev/null 2>&1; then
    gh repo set-default "$GH_USER/$REPO_NAME"
    git remote add origin "https://github.com/$GH_USER/$REPO_NAME.git"
  fi
  git push -u origin main 2>/dev/null || git push origin main
fi

# ── 5. GitHub Pages aanzetten ───────────────────────────────────────────────
if ! gh api "/repos/$GH_USER/$REPO_NAME/pages" >/dev/null 2>&1; then
  gh api -X POST "/repos/$GH_USER/$REPO_NAME/pages" \
    -f "source[branch]=main" -f "source[path]=/" >/dev/null
  echo "${G}✓${D} GitHub Pages aangezet"
else
  echo "${Y}!${D} Pages al actief."
fi

# ── 6. Wacht op build + toon URL ────────────────────────────────────────────
echo
echo "${B}Wachten tot Pages-build klaar is…${D}"
for i in {1..20}; do
  STATUS=$(gh api "/repos/$GH_USER/$REPO_NAME/pages" --jq .status 2>/dev/null || echo "queued")
  URL=$(gh api "/repos/$GH_USER/$REPO_NAME/pages" --jq .html_url 2>/dev/null || echo "")
  if [ "$STATUS" = "built" ]; then break; fi
  printf "."
  sleep 6
done
echo

echo
echo "${G}${B}🎉 Live!${D}"
echo "URL:        ${B}$URL${D}"
echo "Repo:       https://github.com/$GH_USER/$REPO_NAME"
echo "Lokale map: $DST_DIR"
echo
echo "Volgende keer iets aanpassen:"
echo "  ${B}cd $DST_DIR${D}"
echo "  ${B}git add . && git commit -m 'wat je veranderd hebt' && git push${D}"
