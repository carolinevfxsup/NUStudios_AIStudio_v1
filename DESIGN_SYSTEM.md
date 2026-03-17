# NuStudios Design System

This document outlines the visual language and design patterns used across the NuStudios website and showcase pages (e.g., O Palmeiral).

## 1. Typography

### Fonts
- **Display Font:** `Space Grotesk`
  - Used for headlines, titles, and high-impact text.
  - Characteristics: Tracking-tighter, bold, often uppercase in showcase titles.
- **Sans Font:** `Inter`
  - Used for body text, labels, and UI elements.
  - Characteristics: Clean, legible, variable weights (300-700).
- **Serif Font:** Default System Serif (e.g., Georgia, Times New Roman)
  - Used for editorial quotes and specific stylistic accents.
  - Characteristics: Italicized, elegant.
- **Mono Font:** Default System Mono
  - Used for technical data or specific labels (if applicable).

### Heading Styles
| Level | Font | Case | Characteristics |
| :--- | :--- | :--- | :--- |
| **H1 (Hero)** | Sans | Bold Italic | `text-[15vw] md:text-[12vw]`, tracking-tighter, white |
| **H2 (Showcase)** | Display | Uppercase | `text-4xl md:text-6xl`, tracking-tight, **Red Full Stop** |
| **H2 (Home)** | Display | Normal/Mixed | `text-5xl md:text-7xl`, tracking-tighter |
| **H3** | Display | Uppercase | `text-xl md:text-2xl`, tracking-tight |

### Special Text Patterns
- **Section Labels:** `font-sans text-xs uppercase tracking-widest text-text/60`
- **Quotes:** `font-serif italic text-3xl md:text-5xl leading-tight`
- **Rail Text:** `text-[10px] font-bold uppercase tracking-[0.5em] text-white/20` (Vertical in Hero)
- **Hero Subtitle:** `text-white/60 text-sm md:text-base font-medium uppercase tracking-widest`

---

## 2. Color Palette

### Brand Colors
- **Primary Red:** `#E11D48` (Tailwind `red-600`)
  - Used for: Full stops at the end of titles, active icons, primary buttons, and accents.

### Neutral Colors
- **Background (bg):** `#FFFFFF`
- **Text (text):** `#000000`
- **Neutral:** `#F9F9F9`
- **Border:** `#EEEEEE`

### Section Backgrounds
- **Pure White:** `bg-white` (#FFFFFF)
- **Off-White / Light Grey:** `bg-[#F9F9F7]` or `bg-[#F5F5F0]`
- **Deep Dark:** `bg-black` (#000000) or `bg-[#0A0A0A]`
- **Soft Grey:** `bg-[#f8f8f8]`

---

## 3. Component Patterns

### The "Red Full Stop" Pattern
All major showcase titles and results headings should end with a red full stop.
```tsx
<h2 className="font-display uppercase">
  TITLE TEXT<span className="text-red-600">.</span>
</h2>
```
*Note: In some files, `text-primary` is used, which maps to this same brand red.*

### Bento Grids
Used for results and infographics.
- **Grid:** `grid grid-cols-1 md:grid-cols-3 gap-4`
- **Item:** `p-6 border border-border bg-neutral rounded-md`

### Buttons
- **Primary:** `bg-red-600 text-white rounded-full px-10 py-4 uppercase tracking-widest font-bold text-xs`
- **Secondary:** `bg-black text-white` or `border border-black text-black`

---

## 4. Showcase Specifics (O Palmeiral)

### Layout Patterns
- **Hero:** `ShowcaseHero` component with right-aligned image.
- **Alternating Sections:**
  - Image Left / Text Right
  - Text Left / Image Right
- **Human Checkpoint:** A specific pattern for showing a "human-in-the-loop" step, often with a light background (`bg-[#F9F9F7]`).

### Iconography
- **Library:** `lucide-react`
- **Color:** Often used with `text-red-600` for emphasis or `text-primary`.
- **Sizing:** `w-6 h-6` for list items, `w-10 h-10` for feature blocks.

---

## 5. Implementation Notes
- **Transitions:** Use `framer-motion` for `fadeInUp` effects on sections.
- **Borders:** Use `border-black/5` or `border-white/10` for extremely subtle separation.
- **Images:** Always use `referrerPolicy="no-referrer"` and `object-cover`.
