import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Frontpage from './components/Frontpage/Frontpage';
import Products from './components/ProductsPage/Products';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/saree' element={<Products />}></Route>
        <Route path='/Lehengas' element={<p>Lehengas</p>}></Route>
        <Route path='/SalwarKameez' element={<p>SalwarKameez</p>}></Route>
        <Route path='/Kurtis' element={<p>Kurtis</p>}></Route>
        <Route path='/Jewellery' element={<p>Jewellery</p>}></Route>
        <Route path='/Kids' element={<p>Kids</p>}></Route>
        <Route path='/Men' element={<p>Men</p>}></Route>
        <Route path='/Home&Living' element={<p>Home&Living</p>}></Route>
        <Route path='/Luxe' element={<p>Luxe</p>}></Route>
        <Route path='/Spiritual' element={<p>Spiritual</p>}></Route>
        <Route path='/Collections' element={<p>Collections</p>}></Route>
      </Routes>
      <Frontpage />
      <Footer />
    </>
  );
}

export default App;
