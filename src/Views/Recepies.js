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
    <div>
      {recepies.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name}: {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Recepies
