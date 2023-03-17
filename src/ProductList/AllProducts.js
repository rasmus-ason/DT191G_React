import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




  const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

  
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

    //In filteredproducts the products from the state is beeing stored OR the filtered categories if thats has been choosen by the user
    const filteredProducts = selectedCategory ? 
    products.filter(product => product.category === selectedCategory) : 
    products;

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

  


  return (
    <div>

        <h1 className='font-Tilt-Prism text-center text-4xl md:text-6xl text-primaryDarkBlue py-10 px-6'>Alla produkter</h1>

        {/* Filter unique values to prevent that categories gets presented multiple times
        Add on-click function to filter products - can be restored with the bottom button */}
        <div className='flex flex-wrap gap-4 justify-center mb-12'>
          {[...new Set(products.map((product) => product.category))].map((category) => (
            <button 
            className='bg-primaryDarkBlue text-primaryWhite px-8 py-1 rounded-md shadow-md font-Playfair' 
            key={category.productId} 
            onClick={() => handleCategoryClick(category)}>{category}</button>
            ))}
          <button
          className='bg-primaryDarkBlue text-primaryWhite px-8 py-1 rounded-md shadow-md font-Playfair'
          onClick={() => setSelectedCategory(null)}>Visa alla kategorier</button>
        </div>

        <hr className='w-4/5 mx-auto'></hr>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 pb-20 mt-10">
          {filteredProducts.map((product) => (
            <div
              className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              key={product.id}
            >

                  {product.amountInStock < 10 && product.amountInStock > 0 ? (
                  <div className="bg-primaryWhite text-primaryRed font-semibold px-2 py-1 absolute top-2 right-2 rounded-tr-md z-10 opacity-85">
                    {product.amountInStock} st i lager!
                  </div>
                   ) : product.amountInStock === 0 ? (
                    <div className="bg-primaryWhite text-primaryRed font-semibold px-2 py-1 absolute top-2 right-2 rounded-tr-md z-10 opacity-85">
                    Slut i lager!
                  </div>
                  ) : null}
              

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





        </div>
  )
}

export default AllProducts
