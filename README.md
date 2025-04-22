# ubresources

npx create-react-app ubresources-frontend
cd ubresources-frontend
npm start

npm install react-router-dom axios

src/
├── components/       # Reusable parts (Header, Footer, ProductCard)
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/            # All website pages
│   ├── Home.jsx
│   ├── Auth.jsx      # Login & Register
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Cart.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Checkout.jsx
│   ├── Shipping.jsx
│   ├── OrderConfirmation.jsx
│   └── Profile.jsx
├── App.js            # Main app file (handles routing)
└── index.js          # React entry point

mkdir components pages
touch Header.jsx Footer.jsx ProductCard.jsx
touch Home.jsx Auth.jsx  About.jsx Contact.jsx Cart.jsx Products.jsx ProductDetails.jsx Checkout.jsx Shipping.jsx OrderConfirmation.jsx Profile.jsx

touch Auth.css  About.css Contact.css Cart.css Products.css ProductDetails.css Checkout.css Shipping.css OrderConfirmation.css Profile.css