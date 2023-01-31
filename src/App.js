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
import { Box } from '@chakra-ui/react';
import AlertCompo, { CustomAlert, SignInSuccessfull, UserExistsAlert, WrongEmail, WrongPassword } from './components/alertCompo/alertCompo';
import Cart from './components/Frontpage/Cart/Cart';
import { useContext } from 'react';
import { AuthContext } from './components/AuthContext/context';
import { SearchBar } from './components/navbar/nav2';
import Checkout from './components/Frontpage/Cart/Checkout/checkout';

function App() {
  let {activeSearch, setActiveSearch} = useContext(AuthContext)
  return (
    <>
    <CustomAlert msgs={"User Account Succesfully Added"} status={"success"} />
    <UserExistsAlert />
    <AlertCompo/>
    <WrongEmail />
    <WrongPassword />
    <SignInSuccessfull />
      <Navbar />
      <Box display={["block","block","none","none","none"]} w={"100vw"} h="100px"></Box>
      <SearchBar />
      <Routes>
      <Route path='/search' element={<Products />} />
        <Route path='/products/:pro' element={<Products />}></Route>
        <Route path='/signup' element={<SignupCard />}></Route>
        <Route path='/signin' element={<SigninCard />}></Route>
        <Route path='/products/:categories/:name/:id' element={<BigProduct/>}></Route>
        <Route path='/' element={<Frontpage />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
