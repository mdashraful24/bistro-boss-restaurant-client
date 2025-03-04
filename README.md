# Bistro Boss Restaurant

![Bistro Boss Banner](https://i.ibb.co.com/1YGgjn71/Screenshot-82.png)

Welcome to **Bistro Boss Restaurant**, a modern, feature-rich web application designed to streamline the restaurant experience for both customers and restaurant owners. Built with the latest web technologies, our platform allows seamless menu browsing, online ordering, and payment processing, ensuring an exceptional user experience.

🚀 **Live Demo:** [BistroBoss](https://bistroboss-674ce.web.app/)

## Features

| Feature                      | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| **Online Menu**               | View and interact with a dynamic, filterable menu.        |
| **User Account**              | Sign up, log in, and manage your orders and preferences.  |
| **Stripe Payment Integration**| Secure and smooth payment processing via Stripe.         |
| **React Ratings**             | Users can rate dishes to share their experiences.         |
| **Real-time Notifications**   | Receive alerts for order updates.                        |
| **Customer Feedback**         | Easy-to-use system for users to give reviews and feedback.|
| **Responsive Design**         | Fully mobile-friendly for an optimal experience across all devices. |

## Tech Stack

| Technology         | Description                                               |
| ------------------ | --------------------------------------------------------- |
| **Frontend**       | **React.js**: A powerful JavaScript library for building interactive UIs. |
|                    | **Tailwind CSS**: A utility-first CSS framework for custom and responsive design. |
|                    | **Vite**: A fast build tool for React projects.           |
|                    | **DaisyUI**: Tailwind CSS components for a sleek, user-friendly interface. |
|                    | **Stripe**: Secure online payment gateway integration.   |
|                    | **React Router**: For handling navigation across pages.  |
|                    | **React Query**: For data fetching and caching.          |
| **Backend**        | **Node.js**: A JavaScript runtime for building scalable backend services. |
|                    | **Express.js**: Web framework for building RESTful APIs. |
|                    | **MongoDB**: NoSQL database for storing restaurant data, orders, and user information. |
|                    | **JWT (JSON Web Token)**: For secure user authentication and session management. |

## Firebase Configuration

Make sure to add your Firebase configuration in your `.env` file. This will allow you to securely access Firebase services.

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

🚨 **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to keep it secure.

### Using Firebase Configuration in Your Code

In your application, you can access the Firebase configuration by referencing the environment variables as shown below:

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

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or above)
- npm or yarn
- MongoDB (or use MongoDB Atlas for a cloud database)
- Stripe account for payment gateway integration
- Firebase project for Firebase services

### Installation

1. **Clone the repository:**

   ```bash
   https://github.com/mdashraful24/bistro-boss-restaurant-client.git
   ```

2. **Install dependencies:**

   For the frontend:

   ```bash
   cd client
   npm install
   ```

   For the backend:

   ```bash
   cd server
   npm install
   ```

### Environment Variables

Make sure to configure your environment variables in both the `client` and `server` directories by creating `.env` files.

### Run the Project

To start the frontend and backend servers:

1. **Start the backend server:**

   ```bash
   cd server
   npm start
   ```

2. **Start the frontend server:**

   ```bash
   cd client
   npm run dev
   ```

Visit `http://localhost:3000` to interact with the application.

### Running in Production

To build and preview the production-ready application:

1. **Build the frontend:**

   ```bash
   cd client
   npm run build
   ```

2. **Run the backend server:**

   ```bash
   cd server
   node index.js
   ```

### Testing

- This project currently does not have an automated testing setup. If you plan to add tests, feel free to implement your preferred testing framework (e.g., Jest, Mocha).

## Admin Related Info:

  - **Username**: 
  - **Email**: 
  - **Password**: 
