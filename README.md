# 🍽️ Bistro Boss Restaurant

<div align="center">
  <img height="500" src="https://drive.google.com/uc?export=view&id=1b-9UkRV9DCnG24cTnYvQmmWIZQ9C6aX4" alt="Bistro Boss Restaurant Screenshot" />
</div>

<br />

> **Bistro Boss Restaurant** is a modern, feature-rich full-stack web application designed to streamline the restaurant experience for both customers and restaurant owners. The platform allows seamless menu browsing, online ordering, Stripe-powered payment processing, and a full admin dashboard — ensuring an exceptional user experience from start to finish.

---

## ✨ Features

| Feature | Description |
| ------- | ----------- |
| 🍴 **Interactive Menu** | Browse a dynamic, category-filterable restaurant menu |
| 🔐 **User Authentication** | Secure sign-up/login with Firebase Auth (Email & Google) |
| 💳 **Stripe Payment** | Fully integrated, secure payment processing via Stripe |
| ⭐ **Dish Ratings** | Customers can rate dishes to share their experiences |
| 🔔 **Real-time Notifications** | Toast & SweetAlert2 alerts for cart, order, and auth events |
| 💬 **Customer Reviews** | Easy-to-use feedback and review system |
| 🛒 **Shopping Cart** | Add/remove items with persistent cart management |
| 📊 **Admin Dashboard** | Manage menu items, orders, and users with analytics charts |
| 📱 **Responsive Design** | Fully mobile-friendly across all screen sizes |
| 🔒 **Protected Routes** | Role-based access control for admin-only pages |
| 🖼️ **Image Hosting** | Upload images via ImgBB & Cloudinary integrations |
| 🎠 **Parallax & Carousel** | Smooth parallax effects and interactive image carousels |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
| ---------- | ------- |
| **React 19** | Core UI library for building interactive interfaces |
| **Vite 6** | Lightning-fast build tool and dev server |
| **React Router DOM v7** | Client-side routing and navigation |
| **Tailwind CSS v3** | Utility-first CSS framework for rapid styling |
| **DaisyUI v4** | Tailwind CSS component library |
| **TanStack React Query v5** | Async data fetching, caching, and synchronization |
| **Firebase v11** | Authentication and hosting |
| **Stripe (React & JS SDK)** | Secure online payment processing |
| **Axios** | HTTP client for API communication |
| **Recharts** | Responsive charting library for the admin dashboard |

### Backend
| Technology | Purpose |
| ---------- | ------- |
| **Node.js** | JavaScript runtime for server-side logic |
| **Express.js** | REST API framework |
| **MongoDB** | NoSQL database for data persistence |
| **JWT** | Stateless user authentication & authorization |

---

## 📦 Dependencies

### Production Dependencies
| Package | Version | Description |
| ------- | ------- | ----------- |
| `react` | ^19.2.1 | Core React library |
| `react-dom` | ^19.2.1 | React DOM rendering |
| `react-router-dom` | ^7.1.1 | Client-side routing |
| `@tanstack/react-query` | ^5.64.1 | Data fetching & caching |
| `firebase` | ^11.1.0 | Firebase Auth & Hosting |
| `axios` | ^1.7.9 | HTTP client |
| `@stripe/react-stripe-js` | ^3.1.1 | Stripe React components |
| `@stripe/stripe-js` | ^5.5.0 | Stripe JS SDK |
| `recharts` | ^2.15.0 | Charting library |
| `react-hook-form` | ^7.54.2 | Performant form management |
| `react-icons` | ^5.4.0 | Icon library |
| `react-toastify` | ^11.0.2 | Toast notifications |
| `sweetalert2` | ^11.6.13 | Beautiful alert modals |
| `swiper` | ^11.2.0 | Touch-friendly slider/carousel |
| `lottie-react` | ^2.4.0 | Lottie animation support |
| `react-parallax` | ^3.5.1 | Parallax scrolling effects |
| `react-responsive-carousel` | ^3.2.23 | Image carousel component |
| `react-tabs` | ^6.1.0 | Accessible tab component |
| `@smastrom/react-rating` | ^1.5.0 | Star rating component |
| `react-helmet-async` | ^2.0.5 | Dynamic `<head>` management |
| `react-simple-captcha` | ^9.3.1 | CAPTCHA verification |
| `@fortawesome/fontawesome-free` | ^6.7.2 | Font Awesome icons (CSS) |
| `@fortawesome/react-fontawesome` | ^0.2.2 | Font Awesome React wrapper |
| `@fortawesome/free-solid-svg-icons` | ^6.7.2 | Solid icon set |
| `localforage` | ^1.10.0 | Offline storage wrapper |

### Dev Dependencies
| Package | Version | Description |
| ------- | ------- | ----------- |
| `vite` | ^6.0.5 | Build tool & dev server |
| `@vitejs/plugin-react` | ^4.3.4 | Vite plugin for React |
| `tailwindcss` | ^3.4.17 | Utility-first CSS framework |
| `daisyui` | ^4.12.23 | Tailwind CSS component library |
| `postcss` | ^8.4.49 | CSS transformation tool |
| `autoprefixer` | ^10.4.20 | CSS vendor prefix automation |
| `eslint` | ^9.17.0 | JavaScript linter |

---

## ⚙️ Configuration (.env)

Create a `.env` file in the root directory and configure the following:

```env
# Firebase Configuration
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID

# ImgBB Image Hosting Key
VITE_IMAGE_HOSTING_KEY=YOUR_IMGBB_KEY

# Cloudinary Configuration
VITE_CLOUDINARY_UPLOAD_PRESET=YOUR_CLOUDINARY_UPLOAD_PRESET
VITE_CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME

# Stripe Payment Gateway
VITE_Payment_Gateway_PK=YOUR_STRIPE_PAYMENT_PK
```

> ⚠️ **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to keep it secure.

### Firebase Config in Code

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

Make sure the following are installed on your machine:

- **Node.js** v16 or above → [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A **Firebase** project → [console.firebase.google.com](https://console.firebase.google.com/)
- A **Stripe** account → [stripe.com](https://stripe.com/)
- **ImgBB** API key → [imgbb.com](https://imgbb.com/) *(optional, for image uploads)*

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/mdashraful24/bistro-boss-restaurant-client.git
cd bistro-boss-restaurant-client
```

**2. Install dependencies:**

```bash
npm install
```

**3. Configure environment variables:**

Create a `.env` file in the root directory (see [Configuration](#️-configuration-env) above) and fill in your credentials.

**4. Start the development server:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

---

## 📁 Project Structure

```
bistro-boss-restaurant-client/
├── public/             # Static assets (logo, JSON data)
├── src/
│   ├── Layout/         # Page layout components
│   ├── Routes/         # Route definitions & protected routes
│   ├── Shared/         # Shared/reusable components
│   ├── assets/         # Images and static assets
│   ├── components/     # Feature-specific components
│   ├── firebase/       # Firebase configuration
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page-level components
│   ├── providers/      # Context providers (Auth, etc.)
│   ├── App.jsx         # Root application component
│   └── main.jsx        # Application entry point
├── .env                # Environment variables (not committed)
├── index.html          # HTML entry point
├── package.json        # Project metadata & dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite build configuration
```

## 🌐 Live & Others Links

| Resource | URL |
| -------- | --- |
| 🚀 **Live Application** | [bistroboss-674ce.web.app](https://bistroboss-674ce.web.app/) |
| 🖥️ **Backend Server** | [bistro-boss-restaurant-server-lake.vercel.app](https://bistro-boss-restaurant-server-lake.vercel.app/) |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<!-- ## Admin Related Info:

  - **Username**: 
  - **Email**: 
  - **Password**:  -->
