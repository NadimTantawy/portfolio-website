# Nadim Tantawy — Academic Portfolio

A single-page academic portfolio for **Nadim Tantawy**, a senior Artificial Intelligence student at **Egypt University of Informatics** (Class of 2026). Built for the **Technical Writing** course as Mini Project 1.

---

## Overview

The portfolio presents Nadim's academic profile, professional experience, technical projects, and research interests in a content-forward, evaluator-ready format. Design decisions were guided by audience analysis — the primary reader is an academic professor who needs to assess all content at a glance, without unnecessary stuffing.

---

## Technology Stack

Vanilla HTML5, CSS3, and JavaScript — no frameworks, no build tools.

- **HTML5**: Semantic markup with ARIA labels and a skip-nav link for accessibility.
- **CSS3**: Custom properties for dark/light theming, glassmorphism cards, responsive flexbox/grid layout.
- **JavaScript (ES6+)**: IntersectionObserver scroll-reveal, sticky nav with active-link tracking, mobile hamburger menu, mouse-tracking gradient on project cards.

---

## File Structure

```
index.html   — Single-page markup; all six sections on one scroll
styles.css   — Design system: tokens, layout, components, responsive breakpoints
script.js    — Theme toggle, scroll behavior, mobile menu, reveal animations
blue-circle-with-white-user_78370-4707.avif  — Avatar image (nav + hero)
```

---

## Sections

| # | Section | Content |
|---|---------|---------|
| 1 | **Home** | Hero with name, tagline, two intro paragraphs, and CTA buttons |
| 2 | **About** | Institution info, focus areas, four core-coursework cards |
| 3 | **Experience** | Three internship cards (Apple 2025 → HR Health One 2024 → Amazon 2023), newest first |
| 4 | **Projects** | Two ML project cards — Problem and Results always visible; Methodology and Key Observations in a native `<details>` element |
| 5 | **Research** | Three research cards covering Facial Emotion Recognition, Small Dataset Optimization, and Explainable AI |
| 6 | **Contact** | Email, LinkedIn, and CV download |

---

## Design Notes

- **Theme**: Dark by default (`--bg: #120e15`, teal accent `#14b8a6`), toggleable to light; preference persisted in `localStorage`.
- **Typography**: *Outfit* for headings, *Inter* for body; minimum 16px body text.
- **Cards**: Glassmorphism — `backdrop-filter` blur, semi-transparent `rgba` backgrounds, hover lift with accent border glow.
- **Progressive disclosure**: `<details>/<summary>` used only for secondary project content (Methodology, Key Observations) — all primary content (Problem, Results, research details, experience bullets) is always visible.
- **Bullet format**: Noun-first phrase style with em-dash technology qualifiers for scannable, evaluation-ready lists.
- **Responsive**: Two-column layouts collapse to one column at 768px; pill navbar collapses to hamburger menu.

---

© 2026 Nadim Tantawy — Egypt University of Informatics, Technical Writing Course.
