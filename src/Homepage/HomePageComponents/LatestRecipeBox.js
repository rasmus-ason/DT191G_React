import React from 'react'
import { Link } from 'react-router-dom';
import RecipeImage from '../../Images/bread_02.jpg'

const LatestRecipeBox = () => {
  return (
    <div className="relative">
      <img src={RecipeImage} alt="" />
      <Link to="/recept">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primaryBeige hover:outline hover:bg-primaryDarkBlue hover:text-primaryWhite 
        p-6 text-primaryLightGray text-4xl opacity-95 hover:opacity-100 rounded-md shadow-md py-6">
          <h3 className="font-Tilt-Warp text-2xl md:text-6xl xl:text-8xl text-center opacity-100">Kika in våra surdegsrecept!</h3>
        </div>
      </Link>
    </div>



  )
}

export default LatestRecipeBox
