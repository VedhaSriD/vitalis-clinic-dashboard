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

<img width="1912" height="913" alt="image" src="https://github.com/user-attachments/assets/b6c2394c-541a-442b-a6a5-b3a2a5f6b2cc" />
<img width="1867" height="911" alt="image" src="https://github.com/user-attachments/assets/2ea0bc7c-44fb-46a8-a531-1666225c5e78" />
<img width="1916" height="916" alt="image" src="https://github.com/user-attachments/assets/c05bcaf8-0abe-4d9e-9a40-4385e5bd7f7f" />
<img width="1897" height="912" alt="image" src="https://github.com/user-attachments/assets/a94a68f8-2368-41ab-b0e6-c4d82f4db900" />



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
https://vitalis-clinic-dashboard-iota.vercel.app

Available for freelance work on dashboards and websites for clinics and small businesses.

---

<div align="center">If you like this project, consider giving it a ⭐</div>
