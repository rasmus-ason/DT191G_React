import React from 'react'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

//Components
import Footer from './Views/Footer'
import TopHeader from './Views/TopHeader'
import HomePage from './Homepage/Homepage'
import Cart from './Components/Cart';
import Recepies from './Views/Recepies';
import Guide from './Views/Guide';
import StartKit from './Views/StartKit';
import About from './Views/About';
import AllProducts from './ProductList/AllProducts';
import SingleProduct from './ProductList/SingleProduct';


function App() {

  //Scroll to the top when route change
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
  return (
    <div className="App">

      <TopHeader /> 

     
        <ScrollToTop />
        {/* Init routing */}
        <main>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route exact path='/alla-produkter' element={<AllProducts />} />
              <Route exact path='/produkt/:productId' element={<SingleProduct />} />
              <Route exact path='/varukorg' element={<Cart />} />
              <Route exact path='/recept' element={<Recepies />} />
              <Route exact path='/guide' element={<Guide />} />
              <Route exact path='/startkit' element={<StartKit />} />
              <Route exact path='/om-oss' element={<About />} />
          </Routes>
        </main>
      
       

        <Footer />

      

      
      
    </div>
  );
}

export default App;
