import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { ProductProvider } from "./context/ProductContext";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
)
