import React, { useState, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';


const Cart = () => {

  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [successOrderConfirmation, setsuccessOrderConfirmation] = useState(false);
  const [createdOrdernumber, setCreatedOrdernumber] = useState(null);
  const [errorInputMessage, setErrorInputMessage] = useState(false)


  //Get items that user stored in cart
  const cartItems = JSON.parse(localStorage.getItem('cart')) || []
  
  //Calculate the total price of items
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.amount * item.price;
  }, 0);

  //Remove specific item
  const removeItem = (articleNumber) => {
    const updatedCart = cartItems.filter((item) => item.articleNumber !== articleNumber);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  
  // Function to clear the cart
  const clearCart = () => {
    localStorage.removeItem('cart');
    window.location.reload(); 
  }

  // Function to clear the cart
  const clearCartAfterOrder = () => {
    localStorage.removeItem('cart');
    
  }

  //Make a post req to Customer Order - pick up the ordernumber that gets returned - update a state to true if post was success
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [adress, setAdress] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [totalprice, setTotalPrice] = useState(0);
  const [shippingCost, setshippingCost] = useState(0);

    // Listen for changes in the total price
    useEffect(() => {
      if (totalPrice < 400) {
        setshippingCost("59");
        setTotalPrice(totalPrice.toString());
      } else {
        setshippingCost("0");
        setTotalPrice(totalPrice.toString());
      }
    }, [totalPrice]);

  

  const submitCustomerOrder = (e) => {

      e.preventDefault();

      //Check user input
      const emailRegex = /\S+@\S+\.\S+/;
      if(firstname.length < 1) {setErrorInputMessage(true); return}
      if(lastname.length < 1) {setErrorInputMessage(true); return}
      if (!emailRegex.test(email)) {
        setErrorInputMessage(true); return
      }
      if(phonenumber.length < 1) {setErrorInputMessage(true); return}
      if(adress.length < 1) {setErrorInputMessage(true); return}
      if(zipcode.length < 1) {setErrorInputMessage(true); return}
      if(city.length < 1) {setErrorInputMessage(true); return}

      // if(totalPrice < 400) {
      //   setshippingCost(59);
      // } else {
      //   setshippingCost(0);
      // }

      
      
      

      

      //Create a json body
      const customerOrderBody = {
        "FirstName": firstname,
        "Lastname": lastname,
        "Email": email,
        "Phonenumber": phonenumber,
        "Adress": adress,
        "ZipCode": zipcode,
        "City": city,
        "TotalPrice": totalprice,
        "ShippingCost": shippingCost
      }

      console.log(JSON.stringify(customerOrderBody));

      //Make fetch req
       fetch('http://localhost:5255/CustomerOrder/Create', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(customerOrderBody)
         })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response error');
            }
            return response.json();
            })
            .then(data => {
              setCreatedOrdernumber(data.orderNumber);
              setTimeout(() => {
                submitDetailedOrder(data.orderNumber); // Pass the order number as an argument to submitDetailedOrder
              }, 500);
            })
           .catch(error => console.error(error));

           
    }

    const submitDetailedOrder = (orderNumber) => {

      // Create the Articles array for the request body
      const articles = cartItems.map(article => {
        return {
          "ArticleNumber": article.articleNumber,
          "ProductTitle": article.title,
          "Amount": article.amount
        }
      });

      // Create the request body
      const detailedOrderBody = {
        "OrderNumber": orderNumber, 
        "Articles": articles
      }

      console.log(detailedOrderBody)

      //Make fetch req
      fetch('http://localhost:5255/detailedorder/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(detailedOrderBody)
      })
       .then(response => {
         if (!response.ok) {
           throw new Error('Network response error');
         }else {
          setsuccessOrderConfirmation(true)
          setShowOrderForm(false)
          clearCartAfterOrder()
          window.scrollTo(0, 0);
         }
         return response.json();
         })
        .then(data => console.log(data))
        .catch(error => console.error(error));

    }


 


  

  
  return (
    <div className="mx-auto my-8 w-4/5 md:w-3/5">
      <h2 className="text-2xl font-bold mb-4 text-left">Varukorgen</h2>
      
      {cartItems.length > 0 ? (
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2">Produkt</th>
              <th className="py-2">Artikelnummer</th>
              <th className="py-2">Antal</th>
              <th className="py-2">Pris</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.articleNumber} className="border-b border-gray-400">
                <td className="py-2">{item.title}</td>
                <td className="py-2">{item.articleNumber}</td>
                <td className="py-2">{item.amount} st</td>
                <td className="py-2">{item.amount * item.price} kr</td>
                <td className="py-2">
                    <button
                      onClick={() => removeItem(item.articleNumber)}
                      className="text-red-600 hover:text-red-800"
                      >
                        <FiTrash className="ml-2" />
                      <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-lg font-medium">Varukorgen är tom</p>
      )}

      {/* Clear cart button */}
      {cartItems.length > 0 && (
        <div>
          <p>Summa: {totalPrice} kr</p>
          {totalPrice >= 400 ? (
            <p>Fri frakt</p>
          ) : (
            <>
              <p>Frakt: 59 kr</p>
            </>
          )}
            <button className='bg-primaryRed py-1 px-4 text-primaryWhite my-6' onClick={clearCart}>
              Töm varukorgen
            </button>
            <button onClick={() => setShowOrderForm(true)} className="mx-auto my-8 py-2 w-full outline hover:bg-primaryDarkBlue hover:text-primaryWhite">Fortsätt beställning</button>
        </div>
      )}


      {showOrderForm && (
      <section className='bg-primaryWhite border border-primaryBeige'>
        <h3 className='font-Tilt-Warp text-4xl mb-4 text-center py-6 text-primaryBeige'>Fyll i kontaktuppgifter</h3>
        {errorInputMessage && (<span className='text-primaryRed font-bold text-center py-2'>Fyll i alla kontaktuppgifter korrekt!</span>)}
        <form className="flex flex-col w-2/3 justify-center mx-auto">
          <label className="mb-4 text-primaryDarkBlue">
            <input type="text" placeholder='Förnamn...' value={firstname} onChange={e => setFirstname(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          <br />
          <label className="mb-4 text-primaryDarkBlue">
            <input type="text" placeholder='Efternamn...' value={lastname} onChange={e => setLastname(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          <br />
          <label className="mb-4 text-primaryDarkBlue">
            <input type="email" placeholder='E-post...' value={email} onChange={e => setEmail(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          <br />
          <label className="mb-4 text-primaryDarkBlue">
            <input type="number" placeholder='Telefonnummer...' value={phonenumber} onChange={e => setPhonenumber(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          <br />
          <label className="mb-4 text-primaryDarkBlue">
            <input type="text" placeholder='Faktureringsadress...' value={adress} onChange={e => setAdress(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          <br />
          <label class="mb-4 text-primaryDarkBlue">
            <input type="number" placeholder='Postnummer...' value={zipcode} onChange={e => setZipCode(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          <br />
          <label className="mb-4 text-primaryDarkBlue">
            <input type="text" placeholder='Stad...' value={city} onChange={e => setCity(e.target.value)} 
            className="border border-primaryBeige rounded px-2 py-2 focus:outline-none w-full" />
          </label>
          
          <br />
          <button type="submit" onClick={submitCustomerOrder} className="bg-primaryGreen text-primaryWhite font-semibold hover:bg-primaryDarkBlue py-2 mb-16 px-4 rounded">Bekräfta beställning!</button>
        </form>
      </section>
      )}

      {successOrderConfirmation && (
      <section className='bg-primaryGreen text-primaryWhite text-center font-Playfair py-10 shadow-lg mb-24 mt-10'>

        <h2 className='font-Playfair text-2xl md:text-4xl mb-4'>Beställningen är bekräftad!</h2>
        <p className="text-base md:text-xl px-6" >Tack för din beställning hos Mr. Sourdough!</p>

      </section>
      )}  
      
      
      


    </div>
  )
}

export default Cart
