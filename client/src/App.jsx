import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dash from './pages/user/Dash'
import PrivateRoute from './component/route/PrivateRoute'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminRoute from './component/route/AdminRoute'
import AdminDash from './pages/admin/AdminDash'
import CreateCat from './pages/admin/CreateCat'
import CreateProduct from './pages/admin/CreateProduct'
import User from './pages/admin/User'
import Profile from './pages/Profile'

import Product from './pages/admin/Product'
import UpadteProduct from './pages/admin/UpadteProduct'
import SearchPage from './pages/SearchPage'
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import CategoryProduct from './pages/CategoryProduct'
import CartPage from './pages/CartPage'
import Order from './pages/user/Order'
import AdminOrders from './pages/admin/AdminOrders'


function App() {
 

  return (
    <>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/product/:slug' element={<ProductDetails/>} />
      <Route  path='/categories' element={<Categories/>} />
      <Route  path='/cart' element={<CartPage/>} />
      <Route  path='/category/:slug' element={<CategoryProduct/>} />
      <Route  path='/search' element={<SearchPage/>} />
      <Route path='/dashbord/'  element={<PrivateRoute/>} >
      <Route  path='user' element={<Dash/>} />
      <Route  path='user/profile' element={<Profile/>} />
      <Route  path='user/order' element={<Order/>} />
        </Route>  
      <Route path='/dashbord/' element={<AdminRoute/>}>
      <Route path='admin' element={<AdminDash/>}/>
      <Route path='admin/create-product' element={<CreateProduct/>}/>
      <Route path='admin/product/:slug' element={<UpadteProduct/>}/>
      <Route path='admin/create-category' element={<CreateCat/>}/>
      <Route path='admin/product' element={<Product/>}/>
      <Route path='admin/user' element={<User/>}/>
      <Route path='admin/orders' element={<AdminOrders/>}/>
        </Route>  
      <Route  path='/about' element={<About/>} />
      <Route  path='/register' element={<Register/>} />
      <Route  path='/forgot-password' element={<ForgotPassword/>} />
      <Route  path='/login' element={<Login/>} />
      <Route  path='/contact' element={<Contact/>} />
      <Route  path='/policy' element={<Policy/>} />
      <Route  path='/*' element={<Pagenotfound/>} />
    </Routes>
     
    </>
  )
}

export default App
