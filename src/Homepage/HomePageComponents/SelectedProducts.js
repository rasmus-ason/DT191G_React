import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../src/main.css'


const SelectedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5255/GetAllProducts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error));
  }, []);
  

  return (
   
        <div className='bg-primaryBeige py-8 overflow-x-hidden'>
        <h2 className="text-white font-Tilt-Warp text-center uppercase text-3xl py-6">Senaste Produkterna</h2>

        <section className="selectedProducts flex flex-row overflow-x-scroll overflow-y-hidden">
            {products.map(product => (
            <div className="relative w-3/5 sm:w-1/2 md:w-1/3 flex-none p-4" key={product.id}>
              <img className='h-80 w-full object-cover' src={product.imageName} alt={product.altText} />
              <Link to={`/produkt/${product.productId}`}>
                <div className="absolute inset-x-0 bottom-8 flex justify-center items-center">
                  <h3 className="bg-primaryLightGray opacity-75 p-1 md:py-2 lg:py-4 w-5/6 text-center font-Tilt-Warp text-xl hover:opacity-100 cursor-pointer">{product.title}</h3>
                </div>
                </Link>
          </div>
          
          
          
            ))}
        </section>
        </div>
    
  );
};

export default SelectedProducts;
