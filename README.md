# Nadim Tantawy — Academic Portfolio

A single-page academic portfolio for **Nadim Tantawy**, a senior Artificial Intelligence student at **Egypt University of Informatics** (Class of 2026). Built for the **Technical Writing** course as Mini Project 1.

---

## Purpose

This portfolio supports academic evaluation by showing proof of work done in AI courses — not a general showcase, but a targeted document for a professor audience. The 10-second goal: communicate name, academic focus, evidence of structured thinking, and correct technical terminology. Every content and design decision follows from that constraint.

---

## Audience & Design Rationale

**Primary reader**: an academic professor scanning for evidence of technical competence and research-oriented thinking.

**What they need immediately**: name, specialization, and proof that projects are explained — not just listed. Vague descriptions, missing methodology, or design that outweighs content would signal the opposite.

This drove three concrete decisions:
- All primary content (problem statements, results, experience bullets, research objectives) is always visible — no hover-to-reveal, no hiding behind interactions.
- Project cards use `<details>/<summary>` only for secondary material (Methodology, Key Observations), keeping the evaluator-critical content up front.
- Bullet points follow a noun-first phrase format with em-dash technology qualifiers — scannable and information-dense without padding.

---

## Site Structure

Six sections on a single scroll, reachable in ≤ 2 clicks from anywhere via the sticky navbar:

| # | Section | Content |
|---|---------|---------|
| 1 | **Home** | Name, tagline, two-paragraph intro establishing academic focus, CTA buttons |
| 2 | **About** | Institution, degree, focus areas, four core-coursework cards |
| 3 | **Experience** | Three internship cards (Apple 2025 → HR Health One 2024 → Amazon 2023), newest first |
| 4 | **Projects** | Two ML case studies — Problem and Results always visible; Methodology and Key Observations expandable via `<details>` |
| 5 | **Research** | Three research cards: Facial Emotion Recognition, Small Dataset Optimization, Explainable AI |
| 6 | **Contact** | Email, LinkedIn, CV download |

Navigation returns to Home via the brand link; all six sections are one click away. Layout is uncluttered by design — content sections, not decorative fillers.

---

## Technology Stack

Vanilla HTML5, CSS3, and JavaScript — no frameworks, no build tools — chosen for fast loading and full control over markup semantics.

- **HTML5**: Semantic elements (`<header>`, `<main>`, `<article>`, `<section>`) with ARIA labels throughout; native `<details>/<summary>` for accessible progressive disclosure.
- **CSS3**: Custom property design system for dark/light theming, glassmorphism cards (`backdrop-filter`), responsive flexbox/grid that collapses to single-column at 768px.
- **JavaScript (ES6+)**: `IntersectionObserver` for scroll-reveal, sticky nav with active-link tracking, mobile hamburger menu, mouse-tracking radial gradient on project cards.

---

## Performance & Responsiveness

- Lightweight HTML/CSS structure with no external dependencies beyond two Google Fonts — fast initial load.
- Responsive containers and flexible grid layouts handle mobile, tablet, and desktop without media-query bloat.
- Pill navbar collapses to a hamburger menu at 768px; two-column grids collapse to one column at the same breakpoint.

---

## Accessibility

- Semantic HTML and clear section headings allow screen readers to navigate the site structure without visual cues.
- Alt text on all images; ARIA labels on interactive controls.
- High-contrast color palette (teal `#14b8a6` on dark `#120e15`); minimum 16px body text; two fonts maximum (*Outfit* headings, *Inter* body).

---

## Differentiation

The portfolio is scoped to academic ML work and research — not a general programming showcase. Content emphasizes theoretical understanding, structured evaluation methodology, and reproducible experimentation, which is what distinguishes an AI academic portfolio from a generic developer page.

---

© 2026 Nadim Tantawy — Egypt University of Informatics, Technical Writing Course.
