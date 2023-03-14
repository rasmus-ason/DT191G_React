import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-primaryDarkBlue text-primaryLightGray text-center'>

        <h2 className='font-Tilt-Prism text-6xl py-10'>Mr. Sourdough</h2>
        <hr className='w-2/3 mx-auto'></hr>

        <nav className='py-10'>
          <ul className='flex flex-col gap-3 text-xl lg:text-2xl'>
            <Link to="alla-produkter" className='font-Playfair'>Alla produkter</Link>
            <hr className='w-1/6 mx-auto'></hr>
            <Link to="/recept" className='font-Playfair'>Recept</Link>
            <hr className='w-1/6 mx-auto'></hr>
            <Link to="/guide" className='font-Playfair'>Sätt en surdeg</Link>
            <hr className='w-1/6 mx-auto'></hr>
            <Link to="/om-oss" className='font-Playfair'>Om oss</Link>
          </ul>
        </nav>

        <div className="bg-white rounded-md p-4 w-5/6 sm:w-3/5 md:w-1/2 lg:w-1/3  mx-auto">
          <h3 className='font-Tilt-Warp text-4xl pb-2'>Kontakta oss</h3>
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label for="name" className="sr-only">Namn</label>
              <input id="name" type="text" name="name" placeholder="Namn" class="border-gray-300 rounded-md w-full py-2 px-3" />
            </div>
            <div>
              <label for="email" className="sr-only">E-post</label>
              <input id="email" type="email" name="email" placeholder="E-post" class="border-gray-300 rounded-md w-full py-2 px-3" />
            </div>
            <div>
              <label for="message" className="sr-only">Meddelande</label>
              <textarea id="message" name="message" placeholder="Meddelande" class="border-gray-300 rounded-md w-full py-2 px-3"></textarea>
            </div>
            <div>
              <button type="submit" className="outline w-full mx-auto text-white font-bold py-2 px-4 rounded">Skicka</button>
            </div>
          </form>
        </div>

        <hr className='w-3/4 md:w-1/2 mx-auto mt-8'></hr>
        <div className="flex justify-center py-2">
          <nav>
            <ul className="flex">
              <li className="pr-2 md:pr-6 border-r">FAQ</li>
              <li className="px-2 md:px-6 md:pr-6 border-r">Leveranser</li>
              <li className="px-2 md:px-6 md:pr-6 border-r">Returer & Återköp</li>
              <li className="md:px-6">Privacy Policy</li>
            </ul>
          </nav>
        </div>
        <hr className='w-3/4 md:w-1/2 mx-auto'></hr>


        <p className='py-4'>&copy; 2023 Mr Sourdoug</p>
      
    </div>
  )
}

export default Footer