import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import cartImg from '../Images/cart-icon.jpg'

const TopHeader = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showProducts, setShowProducts] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };



  return (
    <div>

        <section>
            <div className='bg-primaryDarkBlue shadow-md'>
                <p className='text-center py-2 text-primaryLightGray italic'>Fri frakt vid beställning över 399:-</p>
            </div>

            <div className='bg-white flex justify-between h-14 shadow-xl'>
                <div className='flex items-center'>
                    <Link to="/">
                        <p className='font-Tilt-Warp text-xl text-primaryBeige pl-4'>Mr. Sourdough</p>
                    </Link>
                </div>
                
               

                <div className="flex items-center">
                <Link to="/varukorg">
                    <img id="cart" className="mr-4 h-10 rounded-full" src={cartImg} alt="cart-icon" />
                </Link>
                    
                </div>

                
            </div>

        </section>

        <div className="top-32 right-4 fixed z-50">
            
            {showMenu ? (
                    <div className="fixed top-0 right-0 w-2/3 md:w-1/2 xl:w-1/3 h-screen bg-primaryDarkBlue z-10">
                        <Link to="/">
                        <h2 className='font-Tilt-Prism text-center text-4xl md:text-6xl text-primaryLightGray py-10 px-6' onClick={handleItemClick}>Mr. Sourdough</h2>
                        </Link>

                    <FaTimes size={20} className="absolute top-2 right-4 bg-primaryLightGray rounded-full" onClick={toggleMenu} />
                    <div className="list-none text-primaryLightGray cursor-pointer text-center">
                        <p className="block py-2 mx-auto font-bold text-xl hover:underline" onClick={toggleProducts}>
                            Produkter
                        </p>
                        {showProducts && (
                            <Link to="/alla-produkter" onClick={handleItemClick}>
                            Se alla produkter
                            </Link>
                        )}
                        <hr className="w-1/3 mx-auto my-4" />
                        <Link to="/guide" className="font-bold text-xl hover:underline" onClick={handleItemClick}>
                            Surdegsskola
                        </Link>
                        <hr className="w-1/3 mx-auto my-4" />
                        <Link to="/startkit" className="font-bold text-xl hover:underline" onClick={handleItemClick}>
                            Start-Kit
                        </Link>
                        <hr className="w-1/3 mx-auto my-4" />
                        <Link to="/om-oss" className="font-bold text-xl hover:underline" onClick={handleItemClick}>
                            Om Oss
                        </Link>
                        </div>
                    </div>
                ) : (
                    <div className='bg-primaryWhite p-3 rounded-full cursor-pointer border-2'>
                        <FaBars size={24} onClick={toggleMenu} />
                    </div>
                )}
                </div>
        </div>
      

  )
}



export default TopHeader
