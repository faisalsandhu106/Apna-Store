import { Navigate, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Header from "./Components/Common/Header"
import RefreshHandle from "./Components/RefreshHandle"
import ForgetPassword from "./Pages/ForgetPassword"
import Service from "./Pages/Service"
import Shop from "./Pages/Shop"
import Footer from "./Components/Common/Footer"
import ContactUs from "./Pages/ContactUs"
import SingleProduct from "./Pages/SingleProduct"
import CartList from "./Pages/CartList"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : < Navigate to="/login" />
  }

  return (
    <>
      {/* <RefreshHandle setIsAuthenticated={setIsAuthenticated} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        {/* <Route path="/home" element={<PrivateRoute element={<Home />} />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path='/allproduct/:id' element={<SingleProduct />} />
        <Route path='/cartlist' element={<CartList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
