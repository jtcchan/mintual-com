# PRD: mintual.com Full QA + Fixes

**Goal:** Verify mintual.com staging visually matches the live Webflow site at all breakpoints. Fix anything that doesn't match.
**Live reference:** https://mintual.com  
**Staging:** https://mintual-staging.netlify.app  
**Repo:** /root/clawd/mintual-com  
**Priority:** MEDIUM — John says "visuals look mostly fine" but no deep look taken yet

---

## Critical Lessons from 2x.ventures (Apply These)

1. Code audit ≠ visual proof. MUST take screenshots and compare
2. Font className bug — check the actual body className in layout.tsx, not just the import
3. Missing favicon — verify `/public/` has correct file AND it's referenced in layout
4. Container max-width — extract from live CSS, don't assume Tailwind defaults
5. Typography (italic, weight, size) — compare headings specifically

---

## Pre-QA Code Audit

### Font Check
- `app/layout.tsx` uses `inter.className` on body — Inter font
- Live site: verify Inter is the correct font. Run: `curl -s https://mintual.com | grep -i "font-family\|google.*font\|inter\|dm_sans"` to confirm
- If the live site uses a DIFFERENT font, fix layout.tsx accordingly

### Favicon Check
- `/public/images/favicon.png` exists ✅
- Verify layout.tsx `metadata.icons` references `/images/favicon.png` ✅
- Double-check browser tab shows the correct mintual icon (not a blank)

### Build Check
- Run `npm run build` and `npx tsc --noEmit` FIRST — fix any errors before visual QA

---

## Tasks

- [ ] **Font verification**: What font does live mintual.com use? Run `curl -s https://mintual.com | head -100 | grep -i font`. Compare with `inter.className` in layout.tsx. If mismatch, fix it.

- [ ] **Favicon verification**: Confirm favicon shows correctly on staging. Check the image at `/images/favicon.png` in the browser.

- [ ] **Live CSS extraction**: Get the live site's CSS to extract key values.
  ```bash
  # Get CSS link from page source
  curl -s https://mintual.com | grep "stylesheet\|\.css" | head -10
  # Download and check key values
  ```
  Extract and compare:
  - Body text color
  - Primary/brand colors
  - H1/H2/H3 sizes and weights
  - Section padding/spacing
  - Card styles

- [ ] **Build check**: `cd /root/clawd/mintual-com && npm run build && npx tsc --noEmit`

- [ ] **Install Playwright**:
  ```bash
  cd /root/clawd/mintual-com
  npm install --save-dev playwright
  npx playwright install chromium
  mkdir -p qa-screenshots
  ```

- [ ] **Screenshot: staging desktop (1440px)**:
  ```bash
  npx playwright screenshot --browser chromium --viewport-size=1440,900 https://mintual-staging.netlify.app qa-screenshots/staging-desktop.png
  ```

- [ ] **Screenshot: live desktop (1440px)**:
  ```bash
  npx playwright screenshot --browser chromium --viewport-size=1440,900 https://mintual.com qa-screenshots/live-desktop.png
  ```

- [ ] **Screenshot: staging mobile (390px)**:
  ```bash
  npx playwright screenshot --browser chromium --viewport-size=390,844 https://mintual-staging.netlify.app qa-screenshots/staging-mobile.png
  ```

- [ ] **Screenshot: live mobile (390px)**:
  ```bash
  npx playwright screenshot --browser chromium --viewport-size=390,844 https://mintual.com qa-screenshots/live-mobile.png
  ```

- [ ] **Screenshot: tablet (768px)**: Staging and live both.

- [ ] **Visual diff — desktop**: Compare screenshots. For each visible difference, describe it and fix the CSS/component. Log to `qa-screenshots/desktop-diff.md`.
  Key sections to compare:
  - Header (logo, nav links, CTA button)
  - Hero (heading, subtext, CTA buttons, background)
  - Stats section (numbers, labels)
  - Why Mintual section (feature cards layout)
  - Products section (card grid, colors)
  - How It Works section (steps layout)
  - Modern Apply section (form/image layout)
  - Footer (links, colors, social icons)

- [ ] **Visual diff — mobile (390px)**: Compare each section at 390px. Log differences. Fix.

- [ ] **Visual diff — tablet (768px)**: Compare. Log. Fix.

- [ ] **Hamburger menu test**: On mobile, verify the hamburger menu opens and shows all nav links. Check that the menu closes when a link is clicked.

- [ ] **Re-screenshot after all fixes**: Take all 6 screenshots again. Verify clean.

- [ ] **Git commit**: `fix(qa): mintual visual parity pass — match live site at all breakpoints`

- [ ] **Final build check**: `npm run build` and `npx tsc --noEmit` both pass.

---

## Done Criteria

- All tasks checked off
- Screenshots show no significant visual differences at 390px, 768px, 1440px
- Build passes cleanly
- All changes committed

---

## Reference URLs

- Live: https://mintual.com
- Staging: https://mintual-staging.netlify.app
