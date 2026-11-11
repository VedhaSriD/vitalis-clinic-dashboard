<div align="center">

# 🩺 Vitalis

### Clinical operations dashboard for modern clinics

Manage patients, appointments, doctors and billing from one calm, fast interface.

[**Live Demo**](https://YOUR-VERCEL-LINK.vercel.app) · [Report a Bug](https://github.com/VedhaSriD/vitalis-clinic-dashboard/issues) · [Request a Feature](https://github.com/VedhaSriD/vitalis-clinic-dashboard/issues)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer&logoColor=white)

</div>

---

## 📸 Preview

![Overview](<img width="1915" height="917" alt="image" src="https://github.com/user-attachments/assets/15eec396-c6d5-4b15-85f5-892b38253db1" />
)

<table>
  <tr>
    <td><img src="<img width="1915" height="908" alt="image" src="https://github.com/user-attachments/assets/c2f2ecda-b2d3-4601-8e51-d5200d1d8652" />
" alt="Patients" /></td>
    <td><img src="<img width="1915" height="917" alt="image" src="https://github.com/user-attachments/assets/411e7796-467e-4062-bc67-38513a4b42ad" />
" alt="Appointments" /></td>
  </tr>
  <tr>
    <td><img src="<img width="1911" height="903" alt="image" src="https://github.com/user-attachments/assets/304f7ce3-c976-4321-9d03-b0da4a689a09" />
" alt="Doctors" /></td>
    <td><img src="<img width="1906" height="897" alt="image" src="https://github.com/user-attachments/assets/37b829d5-50aa-4239-a0c2-0c4c2768cb33" />
" alt="Billing" /></td>
  </tr>
</table>

---

## 🎯 About the Project

Vitalis is a front-end clinic management dashboard that shows how a small or mid-sized clinic can run daily operations in one place. It focuses on clear information hierarchy, a calm hospital-friendly visual style, and purposeful motion.

> **Note:** This is a portfolio project that runs on realistic mock data. There is no backend, and no real patient data is used.

**Design:** ivory and charcoal base with scarlet reserved for brand and primary actions. Status colors (green, amber, grey) are kept separate so they stay meaningful.

---

## ✨ Features

| Module | What it does |
|---|---|
| **Overview** | Animated KPI cards, live ECG telemetry line, weekly patient flow chart, monthly revenue vs target |
| **Patients** | Searchable and sortable table, condition filters, slide-over drawer with vitals and visit history |
| **Appointments** | Week calendar and list view, booking modal with validation, animated success confirmation |
| **Doctors** | Specialist cards with live status badges, room allocation, ratings and patient load |
| **Billing** | Invoice ledger, status indicators, revenue summary with sparklines |
| **Settings** | Profile and notification preferences |

**Motion and UX**
- Page transitions and staggered fade-ups (Framer Motion)
- Sidebar active indicator that morphs between items (`layoutId`)
- Count-up numbers, animated charts, pulsing availability dots
- Hover lift, press states and animated focus rings

---

## 🛠️ Tech Stack

| Area | Tools |
|---|---|
| Framework | React 18, Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Charts | Recharts |
| Tables | TanStack Table v8 |
| State | Zustand |
| Routing | React Router v6 |
| Icons | Lucide React |

---

## 📁 Project Structure

```
src/
├── components/   # layout, cards, feedback (reusable UI)
├── features/     # overview, patients, appointments, doctors, billing, settings
├── data/         # mock data
├── store/        # Zustand store
├── lib/          # utils and motion variants
└── types/        # shared TypeScript types
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/VedhaSriD/vitalis-clinic-dashboard.git
cd vitalis-clinic-dashboard

# Install dependencies
npm install

# Start the dev server
npm run dev

# Production build
npm run build
```

The app runs at `http://localhost:5173`.

---

## 🗺️ Roadmap

- [ ] Dark charcoal theme toggle
- [ ] Skeleton loading states
- [ ] `prefers-reduced-motion` support
- [ ] Unit tests for store and utilities
- [ ] Connect to a real backend (Node + PostgreSQL)
- [ ] Role-based views (admin, doctor, receptionist)

---

## 👤 Author

**Vedha Sri D**
GitHub: [@VedhaSriD](https://github.com/VedhaSriD)

Available for freelance work on dashboards and websites for clinics and small businesses.

---

<div align="center">If you like this project, consider giving it a ⭐</div>
