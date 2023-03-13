import React from 'react'
import HomePageHeader from '../Homepage/HomePageComponents/HomePageHeader'
import SelectedProducts from './HomePageComponents/SelectedProducts'
import GuideBox from './HomePageComponents/GuideBox.js'
import StartKitBox from './HomePageComponents/StartKitBox.js'
import LatestRecipeBox from './HomePageComponents/LatestRecipeBox'

const Homepage = () => {
  return (
    <div>

        <HomePageHeader />

        <SelectedProducts />

        <div className='flex flex-col md:flex-row'>
            <GuideBox />
            <StartKitBox />
        </div>

        <LatestRecipeBox />
      
    </div>
  )
}

export default Homepage
