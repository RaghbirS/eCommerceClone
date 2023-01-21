import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Frontpage from './components/Frontpage/Frontpage';
import Products from './components/ProductsPage/Products';
import SignupCard from './components/Signup/signup';
import SigninCard from './components/Signup/signin';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/saree/:username' element={<Products />}></Route>
        <Route path='/signup' element={<SignupCard />}></Route>
        <Route path='/signin' element={<SigninCard />}></Route>
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
        <Route path='/' element={<Frontpage />}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
