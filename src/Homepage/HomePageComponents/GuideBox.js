import React from 'react'
import { Link } from 'react-router-dom';

import GuideImage from '../../Images/bread_05.jpg'

const GuideBox = () => {
  return (

    <div className='w-full relative'>
        <img src={GuideImage} alt="" />
        <Link to="/guide"
        className='absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-primaryBeige p-6 text-primaryLightGray 
        text-3xl md:text-4xl opacity-95 rounded-md shadow-md font-Tilt-Warp w-2/3 text-center hover:bg-primaryDarkBlue'>
        GUIDE - SÅ KOMMER DU IGÅNG MED DIN SURDEG!</Link>
    </div>

  )
}

export default GuideBox
