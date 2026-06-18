import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import RoleProtectedRoute from './components/RoleProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import MerchantDashboard from './pages/MerchantDashboard.jsx'
import Register from './pages/RegisterPage.jsx'
import Cart from './pages/Cart.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'

const App = () => {
  return (

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* <Route path='/' element={<Home />} /> */}
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <RoleProtectedRoute allowedRole="customer">
              <Home />
            </RoleProtectedRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path='/merchant'
        element={
          <ProtectedRoute>
            <RoleProtectedRoute allowedRole="merchant">
              <MerchantDashboard />
            </RoleProtectedRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <RoleProtectedRoute allowedRole="customer">
              <Cart />
            </RoleProtectedRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/merchant/add-product"
        element={
          <ProtectedRoute>
            <RoleProtectedRoute allowedRole="merchant">
              <AddProduct />
            </RoleProtectedRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-product/:id"
        element={
          <ProtectedRoute>
            <RoleProtectedRoute allowedRole="merchant">
              <EditProduct />
            </RoleProtectedRoute>
          </ProtectedRoute>
        }
      />

      

    </Routes>

  )
}

export default App
