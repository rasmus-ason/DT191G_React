import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-primaryDarkBlue text-primaryLightGray text-center'>

        <h2 className='font-Tilt-Prism text-6xl py-10'>Mr. Sourdough</h2>
        <hr className='w-2/3 mx-auto'></hr>

        <nav className='py-10'>
          <ul className='flex flex-col gap-3 text-md lg:text-xl'>
            <Link to="alla-produkter" className='font-Lorinda-Solid'>Alla produkter</Link>
            <hr className='w-1/6 mx-auto'></hr>
            <Link to="/recept" className='font-Lorinda-Solid'>Recept</Link>
            <hr className='w-1/6 mx-auto'></hr>
            <Link to="/guide" className='font-Lorinda-Solid'>Sätt en surdeg</Link>
            <hr className='w-1/6 mx-auto'></hr>
            <Link to="/om-oss" className='font-Lorinda-Solid'>Om oss</Link>
          </ul>
        </nav>

        <div className="bg-white rounded-md p-4 w-1/3 mx-auto">
          <h3 className='font-Lorinda-Solid text-4xl pb-2'>Kontakta oss</h3>
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

        <hr className='w-1/3 mx-auto mt-8'></hr>
        <div className="flex justify-center py-2">
          <nav>
            <ul className="flex">
              <li className="pr-4 border-r">FAQ</li>
              <li className="px-4 pr-4 border-r">Leveranser</li>
              <li className="px-4 pr-4 border-r">Returer & Återköp</li>
              <li className="px-4">Privacy Policy</li>
            </ul>
          </nav>
        </div>
        <hr className='w-1/3 mx-auto mb-8'></hr>


        <p className='py-4'>&copy; 2023 Mr Sourdoug</p>
      
    </div>
  )
}

export default Footer