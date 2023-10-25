
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shopcontent } from './Pages/Shopcontent';
import { Store } from './Pages/Store';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/men' element={<Shopcontent category="men"/>}/>
        <Route path='/women' element={<Shopcontent category="women"/>}/>
        <Route path='/kids' element={<Shopcontent category="kids"/>}/>
        <Route path='/shoes' element={<Shopcontent category="shoes"/>}/>
        <Route path='product' element = {<Product />}>
            <Route path =':productId' element = {<Product />}/>
        </Route>

        <Route path='/' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
