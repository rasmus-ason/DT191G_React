import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';


const About = () => {


  const [articles, setArticles] = useState([]);
  const [showArticle, setShowArticle] = useState(false);
  
  
    useEffect(() => {
      fetch('http://localhost:5255/GetArticles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error(error));
    }, []);


  return (
    <div>
        
        <section className="selectedProducts flex flex-col">
  {articles.map(article => (
    <div className="relative w-5/6 min-h-auto md:h-auto md:w-3/5 pb-10 px-10 mx-auto mt-10 mb-20 bg-primaryWhite shadow-xl" key={article.id}>
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-thin font-Tilt-Warp text-center py-10">{article.title}</h1>
      <div className="relative">
        <img className='w-full object-cover rounded-md' src={article.imageName} alt={article.altText} />
        <p
          onMouseEnter={() => setShowArticle(article.id)}
          className="font-bold bg-primaryWhite absolute bottom-0 w-full h-16 flex justify-center items-center text-center opacity-80 cursor-pointer">Läs artikel!</p>
      </div>
      {showArticle === article.id && (
        <div onMouseLeave={() => setShowArticle(null)}
          className="bg-primaryWhite absolute top-0 xl:top-96 bottom-0 left-0 right-0 overflow-y-auto p-10 lg:px-24 opacity-90">
          <AiFillCloseCircle onClick={() => setShowArticle(null)} size={30} className="mb-6 block xl:hidden" />
                  <h2 className='font-thin font-Tilt-Warp text-xl'>{article.title}</h2>
                  <p className="">{article.text}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      
    </div>
  )
}

export default About
