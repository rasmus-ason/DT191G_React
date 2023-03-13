import React from 'react'
import HeaderImage from '../../Images/bread_06.jpg'


const HomePageHeader = () => {
  return (
    <div className='relative h-96'>
        <h1 
        className='absolute font-Tilt-Prism bottom-0 left-4 mb-4 mr-4 text-primaryBeige text-6xl md:text-7xl lg:text-8xl'>
        Mr.<br></br>Sourdough</h1>
        <img className='w-full h-96 object-cover' src={HeaderImage} alt='Bild på surdegsbröd på arbetsbänk'></img>   
    </div>
  )
}

export default HomePageHeader
