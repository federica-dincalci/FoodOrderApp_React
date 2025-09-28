# FoodOrderApp_React

![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-4.0+-646cff?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38b2ac?logo=tailwindcss&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-blue) ![Node](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js&logoColor=white)

A simple food ordering application developed with **React** (frontend) and connected to a backend (folder `backend`).  
The goal is to provide an interface to browse a menu, add dishes to the cart, and complete the order with a delivery form.

---

## 📂 Project structure

```
/
├── backend/  
│   └── … (server logic, API, database)  
├── public/  
│   └── index.html, static assets  
├── src/  
│   ├── components/  
│   ├── pages/  
│   ├── styles/  
│   ├── App.jsx  
│   └── index.jsx  
├── package.json  
├── vite.config.js  
├── .gitignore  
└── README.md
```

- **backend/** contains the server code (API, order handling, data persistence).  
- **src/** handles the UI in React: menu, cart, delivery form, navigation.  
- `vite.config.js` configures the development/build environment.  
- `package.json` lists frontend dependencies and scripts.

---

## 💡 Main features

- Menu display with categories and dishes  
- Add/remove items from the cart  
- Total calculation  
- Delivery form for customer data  
- Order submission to the backend  
- Asynchronous request handling (fetch/axios)  
- Responsive styling and clean UI  

---

## 🛠️ Technologies used

- React (components, hooks)  
- Vite  
- HTML / CSS  
- Fetch API or HTTP library (axios, if used)  
- Backend (Node.js / Express / other) in `backend`  
- Local or context state management (React Context/useState/Redux depending on implementation)  

---

## ⚙️ Setup and installation

Follow these steps to run the project locally:

1. Clone the repository  
   ```bash
   git clone https://github.com/federica-dincalci/FoodOrderApp_React.git
   cd FoodOrderApp_React
   ```

2. Install frontend dependencies  
   ```bash
   npm install
   ```

3. Start the backend  
   ```bash
   cd backend
   npm install
   npm start 
   ```

4. Start the frontend  
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000` (or configured port) in your browser to see the app.

---

## 🚀 Usage

- Browse the menu and select desired dishes  
- Add to cart  
- Go to the cart page to review your order  
- Complete delivery details using the form  
- Submit the order to the server  
- (Optional) receive confirmation feedback or track the order status  

---

## Credits

This project was created as part of my learning journey while taking the course  
[React – The Complete Guide 2025 (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=25BBPMXINACTIVE) on Udemy.
