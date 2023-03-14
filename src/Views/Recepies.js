import React, { useEffect, useState } from 'react';

const Recepies = () => {

  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5255/getallrecepies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(data => setRecepies(data))
    .catch(error => console.error(error));
  }, []);


  return (
    <div className='w-5/6 md:w-2/3 lg:w-1/2 mx-auto flex flex-col gap-12 mb-16'>
      {recepies.map((recipe) => (
        <div className='pb-12 shadow-xl p-2 md:px-10' key={recipe.id}>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-thin font-Tilt-Warp text-center py-10">{recipe.title}</h2>
          <img
                className="w-full h-full object-cover object-center"
                src={recipe.imageName}
                alt={recipe.altText}
              />
          <h3 className='text-xl md:text-2xl font-thin font-Tilt-Warp pt-4'>Beskrivning</h3>
          <p className='text-sm md:text-base'>{recipe.description}</p>
          <h3 className='text-lg md:text-xl font-thin font-Tilt-Warp pt-4'>Ingredienser</h3>
          <ul className=''>
            {recipe.ingredients.map((ingredient) => (
              <li className='text-sm md:text-base' key={ingredient.id}>
                {ingredient.name}: {ingredient.quantity} {ingredient.unit}
              </li>
            ))}

            <hr className='w-2/3 mx-auto mt-6 mb-2 text-primaryBeige'></hr>
            <span className='text-center flex justify-center font-Playfair font-semibold text-primaryBeige'>Mr. Sourdough</span>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Recepies
