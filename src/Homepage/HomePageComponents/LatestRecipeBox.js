import React from 'react'
import RecipeImage from '../../Images/bread_02.jpg'

const LatestRecipeBox = () => {
  return (
    <div>
        <div className='w-full relative'>
            <img src={RecipeImage} alt="" />
            <div 
            className='absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-primaryBeige p-6 text-primaryLightGray 
            text-4xl opacity-90 rounded-md shadow-md'>
                <h3>Utvalt recept</h3>
                <ul>
                    <li>1,5 dl surdegskultur</li>
                    <li>7 dl vatten (37C)</li>
                    <li>1 tsk salt</li>
                    <li>5 dl rågmjöl</li>
                    <li>12 dl dinkelmjöl</li>
                </ul>
            </div>
        </div>      
    </div>
  )
}

export default LatestRecipeBox
