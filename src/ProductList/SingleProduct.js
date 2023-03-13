import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';



const SingleProduct = () => {

    const { productId } = useParams();
    
    const [product, setProduct] = useState([null]);
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(1);
    const [showMessage, setShowMessage] = useState(false);


    
    useEffect(() => {
        fetch(`http://localhost:5255/GetProductById/${productId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        })
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error(error));
    }, [productId]);

    const incrementCount = () => {
        if (count < product.amountInStock) {
            setCount(count + 1);
        }
    };
  
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
          }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAddToCart = () => {
        const articleNumber = product.articleNumber;
        const title = product.title;
        const amount = count;
        const price = product.price;
        const newItem = { articleNumber, title, amount, price };
    
        let cart = [];
    
        const existingCart = localStorage.getItem('cart');
        if (existingCart) {
          cart = JSON.parse(existingCart);
        }
    
        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
        setCount(0)

      };

    

        
  return (
    <div className='relative'>
        
            <article>
                <div className='bg-primaryDarkBlue pb-10'>
                <h1 className='font-Tilt-Prism text-center py-10 text-primaryWhite text-4xl md:text-7xl'>{product.title}</h1>
                    <div className='w-3/4 md:w-1/3 mx-auto pb-10'>
                        <img src={product.imageName} alt={product.altText} />
                    </div>

                    {/* Plus/minus-buttons */}
                    {product.amountInStock < 10 && product.amountInStock > 0 ? (
                    <p className='text-primaryWhite italic text-center outline w-40 mx-auto mb-4'>Få varor i lager</p>
                        ) : product.amountInStock === 0 ? (
                    <p className='text-primaryWhite italic text-center outline w-40 mx-auto mb-4'>Slut i lager</p>
                        ) : null}
                    <div className='w-3/4 md:w-1/3 mx-auto bg-primaryWhite border-4 border-primaryWhite flex justify-center h-12'>
                        <button className='w-1/4 bg-primaryDarkBlue text-primaryWhite font-bold text-3xl pb-2' onClick={decrementCount}>-</button>
                            <span className='w-1/2 flex justify-center items-center'>{count}</span>
                        <button className='w-1/4 bg-primaryDarkBlue text-primaryWhite font-bold text-3xl pb-2' onClick={incrementCount}>+</button>
                    </div>

                    {/* Add to cart button - pass articlenumber and amount and store in session storage
                    Check if the cookie exist, if exist push into array */}
                    <button 
                    className={`w-3/4 md:w-1/3 mx-auto border-4 border-primaryWhite flex justify-center items-center h-12 mt-4 text-primaryWhite font-Lorinda-Solid uppercase ${product.amountInStock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handleAddToCart}
                    disabled={product.amountInStock === 0}
                    >
                    Lägg till i varukorgen 
                    </button>

                        
                            
                            
                </div>

                <div className='bg-primaryBeige py-12 text-center font-Lorinda-Solid'>
                    <h2 className='text-5xl text-primaryWhite font-Tilt-Warp'>{product.title}</h2>
                    <h3 className='text-3xl text-primaryWhite py-3 font-Tilt-Warp'>{product.price} kr</h3>
                    <button 
                        className='flex flex-row justify-center mx-auto items-center text-xl border-4
                        border-primaryWhite w-1/4 text-primaryWhite hover:opacity-80'
                        onClick={toggleDropdown}
                    >
                        Om produkten 
                        {isOpen ? <FiArrowUp className="ml-2" /> : <FiArrowDown className="ml-2" />}
                    </button>
                    <div id='dropdown-about-product' className='p-6 border-4 w-1/4 mx-auto text-primaryDarkBlue mt-2' style={{ display: isOpen ? 'block' : 'none' }}>
                        <h4 className='font-Tilt-Warp text-lg underline'>Artikelnummer</h4>
                        <p>{product.articleNumber}</p>
                        <h4 className='font-Tilt-Warp text-lg underline mt-4'>Produktinfo</h4>
                        <p> Produktinfo: {product.productInfo}</p>
                        {product.category === "Mjöler" ? <p> 
                            <h4 className='font-Tilt-Warp text-lg underline mt-4'>Vikt</h4>
                            Vikt: {product.weight} gram</p> : null }
                    </div>
                    </div>
            </article>   

            {showMessage && (
                <div className="bg-primaryGreen p-6 mt-4 rounded-md text-primaryWhite fixed top-16 right-16">
                    Varan har lagts till i varukorgen!
                </div>
            )} 
    </div>
  )
}

export default SingleProduct
