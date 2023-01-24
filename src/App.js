import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Frontpage from './components/Frontpage/Frontpage';
import Products from './components/ProductsPage/Products';
import SignupCard from './components/Signup/signup';
import SigninCard from './components/Signup/signin';
import FAQ from './components/Footer/FooterComponents/faq';
import BigProduct from './components/ProductsPage/bigProductPage';
import Skeleteon from './components/Features/Carousel/skeleton';
import { Box } from '@chakra-ui/react';

function App() {

  return (
    <>
      <Navbar />
      <Box display={["block","block","none","none","none"]} w={"100vw"} h="100px"></Box>
      <Routes>
        <Route path='/products/:pro' element={<Products />}>
          
        </Route>
        <Route path='/signup' element={<SignupCard />}></Route>
        <Route path='/signin' element={<SigninCard />}></Route>
        <Route path='/products/:categories/:name/:id' element={<BigProduct/>}></Route>
        {/* <Route path='/Lehengas' element={<p>Lehengas</p>}></Route>
        <Route path='/SalwarKameez' element={<p>SalwarKameez</p>}></Route>
        <Route path='/Kurtis' element={<p>Kurtis</p>}></Route>
        <Route path='/Jewellery' element={<p>Jewellery</p>}></Route>
        <Route path='/Kids' element={<p>Kids</p>}></Route>
        <Route path='/Men' element={<p>Men</p>}></Route>
        <Route path='/Home&Living' element={<p>Home&Living</p>}></Route>
        <Route path='/Luxe' element={<p>Luxe</p>}></Route>
        <Route path='/Spiritual' element={<p>Spiritual</p>}></Route>
        <Route path='/Collections' element={<p>Collections</p>}></Route> */}
        <Route path='/' element={<Frontpage />}></Route>

        {/* Footer Routes */}
        <Route path='/faq' element={<FAQ />}></Route>

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
