# mintual.com Migration QA Progress

**Source:** https://mintual.com (Webflow)  
**Target:** https://mintual-staging.netlify.app (Next.js/Netlify)  
**Date:** 2026-02-18

---

## QA Pass 1 - Significant Differences Found

### Extra Sections in Migration (not in original)
1. **"Get started in minutes" + Phone section** - Dark card with CTA and phone number (855) 704-7458
2. **Multi-column footer** - Has Company, Lending, Resources, Tools columns (original has simple disclaimer)

### Layout Differences
1. **Product cards** - Different styling (migrated uses icon in accent background box)
2. **Overall page height** - Migrated is taller due to extra sections

---

## Decisions Needed

⚠️ **Question for John:**
- Were the extra sections (phone CTA, expanded footer) intentional upgrades?
- Or should they be removed to match original Webflow exactly?

---

## Status

**Desktop:** 🔴 Needs significant work (extra sections to remove or original discrepancy)
**Mobile:** ⬜ Not yet reviewed  
**Sign-off:** ⬜ Blocked pending decision on extra content
