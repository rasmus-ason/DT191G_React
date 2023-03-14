import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StartKit = () => {

  const [startkit, setStartkit] = useState([]);
  const [showMessage, setShowMessage] = useState(false);


  useEffect(() => {
    fetch('http://localhost:5255/GetStartKitProducts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(data => setStartkit(data))
    .catch(error => console.error(error));
  }, []);

  const addProductsToCart = () => {

    let cart = [];

    startkit.forEach(product => {
      
        const articleNumber = product.articleNumber;
        const title = product.title;
        const amount = 1;
        const price = product.price;
        const newItem = { articleNumber, title, amount, price };
        cart.push(newItem);
   
    });

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  
    localStorage.setItem('cart', JSON.stringify(cart));

  }

  
  return (
    <div>

        <h1 className='font-Tilt-Prism text-center text-4xl md:text-6xl text-primaryDarkBlue py-10 px-6'>Startkit från Mr. Sourdough</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 pb-20 mt-10">
          {startkit.map((product) => (
            <div
            className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            key={product.id}
            >

            <div className="relative h-64">
              <img
                className="w-full h-full object-cover object-center"
                src={product.imageName}
                alt={product.altText}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base h-24 overflow-hidden">
                {product.productInfo}
              </p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-900">{product.price} kr</div>
              <Link
                to={`/produkt/${product.productId}`}
                className="bg-primaryBeige text-primaryWhite hover:bg-opacity-80 px-4 py-2 rounded-lg"
              >
                Läs mer
              </Link>
            </div>
          </div>
      ))}

      
    </div>

    <button 
    onClick={addProductsToCart}
    className='w-2/3 bg-primaryGreen flex justify-center mx-auto py-4 rounded-md text-primaryWhite mt-8 mb-24 font-Tilt-Warp text-xl 
    font-light opacity-95 hover:opacity-100'>
    Lägg till alla varor i varukorgen!</button>

    {showMessage && (
      <div className="bg-primaryGreen p-6 mt-4 rounded-md text-primaryWhite fixed top-16 right-16">
          Startkittet har lagts till i varukorgen!
      </div>
    )}
      
    </div>

   

      )
}

export default StartKit
