# ✨ Dazzling Destinations — Luxury Travel & Curated Journeys

![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-2EA44F?style=for-the-badge&logo=github)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

**Dazzling Destinations** is a state-of-the-art, ultra-luxury travel web application crafted to showcase handpicked travel experiences, private retreats, and bespoke expeditions across India — from the tranquil backwaters of Kerala to the majestic palaces of Rajasthan and the alpine valleys of Kashmir.

---

## 🌟 Live Demo

👉 **[https://shoneyohannan.github.io/Dazzling-Destinations/](https://shoneyohannan.github.io/Dazzling-Destinations/)**

---

## ✨ Features

- **🏰 Bespoke Destination Showcase**: Explore handpicked destinations (Kerala, Rajasthan, Goa, Himachal, Kashmir, Varanasi) with rich imagery, duration highlights, starting prices, and signature badges.
- **📅 Interactive Concierge Booking Modal**: Seamless modal interface allowing guests to select destinations, dates, guest counts, and submit personalized travel inquiries.
- **🍃 Smooth Micro-Animations & Motion**: Micro-interactions driven by `framer-motion`, `gsap`, and `lenis` smooth scroll for an immersive luxury browsing experience.
- **💎 Glassmorphic & Dark-Luxury Design**: Premium color palettes using deep emerald greens, warm gold accents (`#D4AF37`), subtle glows, and backdrop blurs.
- **💬 Verified Guest Testimonials**: Customer stories and luxury reviews slider detailing first-hand travel experiences.
- **📱 Responsive Across All Devices**: Dynamic layout math optimized for desktop, tablet, and mobile displays.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Carousels** | [Swiper](https://swiperjs.com/) |
| **Linter** | [Oxlint](https://oxc.rs/) |
| **Deployment** | [GitHub Actions](https://github.com/features/actions) $\rightarrow$ [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```text
Dazzling-Destinations/
├── .github/
│   └── workflows/
│       └── deploy.yml         
├── public/                   
├── src/
│   ├── components/            
│   │   ├── Navbar.jsx       
│   │   ├── Hero.jsx            
│   │   ├── IntroSection.jsx    
│   │   ├── DestinationGrid.jsx 
│   │   ├── WhyTravelWithUs.jsx 
│   │   ├── ExperienceShowcase.jsx 
│   │   ├── TourModal.jsx       
│   │   ├── TestimonialSlider.jsx 
│   │   ├── CTASection.jsx      
│   │   └── Footer.jsx          
│   ├── data/                   
│   │   ├── destinations.js     
│   │   ├── experiences.js      
│   │   ├── testimonials.js     
│   │   └── tours.js            
│   ├── App.jsx                 
│   ├── main.jsx                
│   └── index.css               
├── index.html                 
├── vite.config.js              
└── package.json                
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine:

### Prerequisites

Ensure you have **Node.js** (v18.0 or higher) and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShoneYohannan/Dazzling-Destinations.git
   cd "Dazzling Destinations"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles and bundles the application for production in `./dist`.
- `npm run preview` — Locally previews the built production bundle.
- `npm run lint` — Runs `oxlint` for fast code linting and formatting verification.

---

## 🚀 Deployment to GitHub Pages

This project features an automated **GitHub Actions CI/CD pipeline** defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### How Deployment Works:
1. Every push to the `main` branch triggers the deployment pipeline.
2. The action sets up Node.js 20, builds the Vite production assets into `./dist`, and deploys them directly to **GitHub Pages**.
3. **GitHub Repository Configuration:**
   - Go to **Settings** $\rightarrow$ **Pages** on your repository.
   - Under **Build and deployment** $\rightarrow$ **Source**, select **GitHub Actions**.

---

## 🛡️ Security & Performance Highlights

- **0 Security Vulnerabilities**: Verified clean dependency graph with `npm audit`.
- **Secret Protection**: `.gitignore` configured to prevent accidental commits of `.env` files or credentials.
- **Fast Global Asset Delivery**: High-resolution imagery served securely over HTTPS via Unsplash CDN.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p center="text-center">
  Crafted with ❤️ for extraordinary travel experiences across India.
</p>
