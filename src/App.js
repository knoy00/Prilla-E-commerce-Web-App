
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shopcontent } from './Pages/Shopcontent';
import { Store } from './Pages/Store';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/men' element={<Shopcontent banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<Shopcontent banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcontent banner={kids_banner} category="kids"/>}/>
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
