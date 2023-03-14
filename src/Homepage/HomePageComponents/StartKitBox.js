import React from 'react'
import { Link } from 'react-router-dom';


const StartKitBox = () => {
  return (

    <div className='bg-primaryDarkBlue w-full flex flex-col items-center justify-center text-primaryLightGray py-20'>
        <h3 className='font-Tilt-Prism text-6xl'>Mr. <br></br> Sourdough</h3>
        <Link to="/startkit" 
        className='outline color-white mt-6 py-3 px-28 font-Playfair text-xl font-semibold hover:bg-primaryWhite hover:text-primaryDarkBlue'>Köp Startkit</Link>
    </div>

  )
}

export default StartKitBox
