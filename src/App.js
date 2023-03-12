import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from  'react-bootstrap'
import Home from './pages/Home';
import { Route ,  Routes } from 'react-router-dom';
import About from './pages/About';
import News from './pages/News';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Account from './pages/profile/Account';
import { useState } from 'react';

function App() {

  const [signupBtn, setSignupBtn] = useState(true)
  console.log(signupBtn)
  return (
    <>
    <Header signupBtn={signupBtn}/>
    <main>
    <Container>
    <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/news' element={ <News/>} />
        <Route path='/product/:id' element={ <ProductPage/>} />
        <Route path='/cart/:id?' element={ <Cart/>} />
        <Route path='/signup' setSignupBtn={setSignupBtn} element={ <SignUp/>} />
        <Route path='/pro' element={ <Account/>} />
    </Routes>
    </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
