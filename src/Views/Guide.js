import React from 'react'
import guideImage from '../Images/bread_01.jpg'

const Guide = () => {
  return (
    <div className='w-5/6 md:w-2/3 mx-auto p-4 mb-16 shadow-xl'>

      <h1 className="text-3xl md:text-4xl lg:text-6xl font-thin font-Tilt-Warp text-center py-10" >Starta en surdeg</h1>

      <img src={guideImage} alt=""></img>

      <hr></hr>

      <h2 className="text-xl md:text-2xl lg:text-4xl font-thin font-Tilt-Warp pt-4 pb-2 text-center" >Ingredienser</h2>

      <div className='text-center'>
        <h3 className='font-bold'>Dag 1</h3>
        <ul>
          <li>0,5 dl vetemjöl</li>
          <li>0,5 dl rågmjöl</li>
          <li>Vatten</li>
        </ul>

        <h3 className='font-bold'>Dag 2</h3>
        <ul>
          <li>1 dl vatten</li>
          <li>0,5 dl rågmjöl</li>
          <li>0,5 dl vetemjöl</li>
        </ul>
        
        <h3 className='font-bold'>Dag 3</h3>
        <ul>
          <li>1 dl vatten</li>
          <li>0,5 dl rågmjöl</li>
          <li>0,5 dl vetemjöl</li>
        </ul>
      </div>

      <hr className='my-4 w-2/3 mx-auto'></hr>
      
      <div className='px-2 lg:px-10'>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-thin font-Tilt-Warp pt-4 pb-2 text-center" >Gör såhär</h2>
        
        <h3 className='font-bold'>Dag 1</h3>
        <p>Se till att burken som du ska ha surdegen i är väl rengjord. I stället för att använda diskmedel kan du sterilisera burken i en varm ugn i några minuter (150 grader i ca 15 minuter). Finns gummiring på burken, koka den i vatten för att få den helt fri från bakterier.
        Häll cirka 1 dl ljummet vatten i den noga rengjorda glasburken med lock (som rymmer cirka 5 dl). Tillsätt 0,5 dl vetemjöl och 0,5 dl rågmjöl. Rör om med en gaffel tills du får en ganska trögflytande slät smet. Vatten och mjölmängden behöver inte vara exakt, det viktiga är att du i slutändan får en konsistens som liknar en tjock pannkakssmet.
        Förvara surdegsstarten i rumstemperatur med locket på glänt så att luftens bakterier når smeten. Ställ gärna en uppochnervänd plastbunke ovanpå burken.
        </p>
        <br></br>
        <h3 className='font-bold'>Dag 2</h3>
        <p>Förhoppningsvis finns det nu några luftbubblor i surdegen och du kan ana en mild och aromatisk doft. Bli inte orolig om surdegen ännu inte har kommit igång, processen kan ta en till två dagar beroende på rumstemperatur och vilken typ av mjöl som du har använt.
        Mata surdegen med 1 dl vatten, 0,5 dl rågmjöl och 0,5 dl vetemjöl och rör om. Förvara i rumstemperatur med locket på glänt och gärna med en uppochnervänd bunke ovanpå.
        </p>
        <br></br>
        <h3 className='font-bold'>Dag 3</h3>
        <p>Mata surdegen med 1 dl vatten, 0,5 dl rågmjöl och 0,5 dl vetemjöl.
        Rör om och förvara i rumstemperatur med locket på glänt.
        </p>

        <h3>Dag 4</h3>
        <p>
        Nu är surdegen förhoppningsvis redo att bakas med. För varje dag som du matar din surdeg tar det kortare tid för den att börja bubbla. En frisk och mogen surdeg brukar börja bubbla 2–3 timmar efter matningen.
        Testa att skaka eller vicka försiktigt på burken så kommer du att märka att den nästan rör sig av sig själv. Det finns liv där inne och du kan nu börja baka surdegsbröd med den.
        Obs! Glöm inte att mata din surdegsstart dagen innan du ska baka med den. Mata den däremot inte direkt efter att du har bakat med den om du inte planerar att baka med den även nästa dag.
        </p>

        <br></br>

        <hr className='w-2/3 mx-auto mt-6 mb-2 text-primaryBeige'></hr>
        <span className='text-center flex justify-center font-Playfair font-semibold text-primaryBeige mb-10'>
        Guiden är hämtad från Köket.se av Sébastien Boudet</span>
      </div>

    </div>
  )
}

export default Guide
