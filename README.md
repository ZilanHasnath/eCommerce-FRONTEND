# eCommerce Frontend

## Description

This project is the frontend of an eCommerce application. It provides a user interface for browsing products, managing cart items, placing orders, and handling user authentication.

The application is built with a component-based architecture and connects to a backend API for data and operations.

---

## Live Demo

Frontend (Vercel):
https://buydoo.vercel.app/

Repository:
https://github.com/ZilanHasnath/eCommerce-FRONTEND.git

---
## Screenshots

### Mobile Home
![Home](public/images/sc1.png)

### Tab Home
![Product](public/images/sc2.png)

### Pc Home
![Cart](public/images/sc3.png)

---

## Features

* Browse products
* View product details
* Add to cart
* Buy products
* User signup and login
* View orders
* User profile management
* Backend wake-up call handling
* Scroll restoration for better navigation

---

## Project Structure

```id="w6b9tk"
eCommerce-FRONTEND/
│
├── public/
│   ├── fronts/        (Fonts used in the project)
│   ├── images/        (Hero section images)
│   │   └── products/  (Product showcase images)
│
├── src/
│   ├── components/
│   │   ├── AddToCartButton.jsx
│   │   ├── BuyNowButton.jsx
│   │   ├── DropDownMenu.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero1.jsx
│   │   ├── Hero2.jsx
│   │   ├── Hero3.jsx
│   │   ├── Hero4.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewCollections.jsx
│   │   ├── Notice.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SingleNewCollection.jsx
│   │
│   ├── data/
│   │   └── products.json
│   │
│   ├── pageMaker/
│   │   ├── BuyNowReady.jsx
│   │   ├── HomeReady.jsx
│   │   ├── LoginReady.jsx
│   │   ├── MyCartReady.jsx
│   │   ├── MyOrdersReady.jsx
│   │   ├── ProfileReady.jsx
│   │   └── SignUpReady.jsx
│   │
│   ├── pages/
│   │   ├── Cart.jsx      
│   │   ├── Home.jsx      
│   │   ├── Login.jsx     
│   │   ├── MyOrders.jsx  
│   │   ├── Profile.jsx   
│   │   └── SignUp.jsx    
│   │
│   ├── App.jsx       (Routing and backend wake-up call)
│   └── main.jsx
│
└── README.md
```

---

## Technologies Used

* React.js
* JavaScript
* CSS
* Vercel (for deployment)

---

## Installation

Clone the repository:

```bash id="k3zq1a"
git clone https://github.com/ZilanHasnath/eCommerce-FRONTEND.git
```

Navigate to the project directory:

```bash id="1y4d8n"
cd eCommerce-FRONTEND
```

Install dependencies:

```bash id="bq2l0s"
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory if needed:

```env id="xk5m8c"
VITE_API_BASE_URL=your_backend_api_url
```

---

## Running the Project

Start the development server:

```bash id="g8v9pj"
npm run dev
```

The app will run on:

```id="9t3xla"
http://localhost:5173
```

---

## Application Flow

* The application loads the home page with product collections
* Users can browse and view individual products
* Users can add items to the cart or proceed to buy
* Authentication is required for placing orders
* The app communicates with the backend API for all operations
* A wake-up request is sent to the backend to handle cold starts

---

## Contributing

Contributions are welcome. Fork the repository, create a new branch, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License. Feel free to use.

---

## Author

GitHub: https://github.com/ZilanHasnath
