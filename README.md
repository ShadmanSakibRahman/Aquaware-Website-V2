# AquaWare Website V2

A modern, responsive website for **AquaWare** — a data-driven platform for monitoring and managing industrial water discharges. Built to help governments gain insight into water quality and take proactive action towards Water Framework Directive (WFD) goals.

## Author

**Md. Shadman Sakib Rahman**

## Features

- **Home Page** — Hero section, interactive feature showcase with tabbed navigation, funnel visualization, newsletter signup, value proposition cards, and contact form
- **About Page** — Company mission, goals, and the meaning behind the AquaWare name (Aqua + Ware + Aware pillars)
- **Knowledge Base** — 5 in-depth articles on water management topics including SVHC substances, indirect discharges, data-driven water management, discharge permits, and PFAS
- **Individual Article Pages** — Full article view with related content links
- **Contact Page** — Contact form with email, phone, and office location details
- **Privacy Policy & Terms of Service** — Complete legal pages
- **Dark/Light Theme Toggle** — Full theme switching with CSS custom properties
- **Animated Water Background** — Floating orbs with mouse-tracking parallax effects
- **Glass-morphism UI** — Backdrop blur panels with transparency effects
- **Responsive Design** — Mobile-first layout with breakpoints at 760px and 1024px
- **Smooth Scroll Animations** — Reveal-on-scroll effects throughout the site
- **Newsletter Subscription** — Email signup form

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library (latest version with hooks) |
| **React Router DOM 7** | Client-side routing and navigation |
| **Vite 7** | Build tool and dev server (fast HMR) |
| **JavaScript (ES Modules)** | Language |
| **CSS3** | Styling — custom properties, gradients, animations, backdrop-filter, 3D transforms |
| **Google Fonts** | Fraunces (serif headings) + Manrope (sans-serif body) |
| **ESLint 9** | Code linting with React hooks and refresh plugins |
| **Vercel** | Deployment and hosting |

## Project Structure

```
├── public/
│   └── assets/          # Images, logos, screenshots
├── src/
│   ├── App.jsx          # All React components and routing
│   ├── content.js       # All page content and data
│   ├── index.css        # Full site styling (~750 lines)
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint flat config
├── package.json         # Dependencies and scripts
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## License

All rights reserved. © 2025 AquaWare.
