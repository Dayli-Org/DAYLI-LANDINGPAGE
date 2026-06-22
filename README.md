# Dayli Landing Page

Trilingual marketing site (Hebrew default, Arabic, English) for Dayli — appointment/WhatsApp CRM.

## Stack

- Astro 4 + TypeScript + Tailwind CSS 3
- Design tokens from `design-system/dayli/MASTER.md`

## Commands

```bash
cd site
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Locales

| Locale | URL | Direction |
|--------|-----|-----------|
| Hebrew (default) | `/` | RTL |
| Arabic | `/ar/` | RTL |
| English | `/en/` | LTR |

## Configuration

Update WhatsApp number in `src/i18n/ui.ts` (`WHATSAPP_NUMBER`).
