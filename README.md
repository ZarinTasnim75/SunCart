## Project Name: SunCart

## Purpose: 
Suncart is a modern e-commerce web application built with Next.js.
It allows users to browse summer products, view product details, create and manage their profile with authentication support.

The goal of this project is to demonstrate a real-world shopping experience with clean UI and authentication-based user features.

## Live URL: https://sun-cart-iztv.vercel.app/

## ✨ Key Features:
1. Displaying products with dynamic data
2. Product details Page
3. User authentication(login/logout)
4. My profile option to manage profile
5. Google authentication login option
6. Fully responsive design (mobile + desktop)
7. Fast navigation using Next.js routing
8. Protected routes (product details open only for logged-in users)

## 🛠️ Tech Stack:
i. Next.js (App Router)

ii. Tailwind CSS

iii. DaisyUI (UI components)

iv. Better Auth (authClient)

v. JSON-based product data 


## 📸 Screenshot

<img width="1431" height="914" alt="image" src="https://github.com/user-attachments/assets/cdaf464d-6a0d-45d4-9c64-a301a87931f1" />

## 📦 Main Dependencies

```json
{
    "@better-auth/mongo-adapter": "^1.6.11",
    "animate.css": "^4.1.1",
    "better-auth": "^1.6.11",
    "mongodb": "^7.2.0",
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.76.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.6.0"
}
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/suncart.git
```

### 2. Navigate to the project folder

```bash
cd suncart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env.local` file

Add the required environment variables.

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

### 5. Start the development server

```bash
npm run dev
```

### 6. Open your browser

Visit:

```
http://localhost:3000
```

## 📂 Resources

- **Repository:** https://github.com/ZarinTasnim75/SunCart
