

import React from 'react'

export const Cust_about = () => {
  return (
    <div>
     <div
      className="d-flex flex-column justify-content-center align-items-center text-center p-5"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <div className="container bg-white shadow-lg rounded p-5">
        <h1>
         <b className="border border-success rounded p-3 my-4 text-center bg-success-subtle text-success mb-4 fw-bold">About TeaLovers</b>
         </h1>
         <br></br>
        <p className="lead text-muted">
          At <strong>TeaLovers</strong>, we believe that every cup of tea tells a story.  
          From the misty hills of Darjeeling to the rich gardens of Assam,  
          each blend is crafted with care and passion. 🍃
        </p>

        <p className="mt-4">
          Our mission is to bring you premium-quality tea that refreshes your mind  
          and nourishes your soul. Whether it’s a calming <b>Green Tea</b>, a bold  
          <b>Black Tea</b>, or a fragrant <b>Masala Chai</b> — every sip delivers warmth,  
          comfort, and happiness.
        </p>

        <p className="mt-4">
          We work closely with local farmers to ensure every leaf is handpicked,  
          naturally processed, and packed with freshness. 🌱  
          At TeaLovers, we don’t just sell tea — we share a lifestyle of peace, health, and togetherness.
        </p>

        <p className="mt-4 fw-bold text-success">
          "Tea is not just a beverage — it’s a feeling of comfort and love in every sip." 💚
        </p>

        <div className="mt-5">
          <img
            src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg"
            alt="Tea cup"
            className="rounded shadow"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "15px" }}
          />
          <p ><h3 className="mt-4 fw-bold text-success">1️⃣ Green Tea </h3> – Overview Green tea is a natural, lightly processed tea made from the leaves of the Camellia sinensis plant. Unlike black tea, green tea is not fermented, which helps it retain its antioxidants and nutrients.
           <b> Benefits:</b>
              Rich in antioxidants Boosts metabolism Improves brain function Supports heart health Promotes calm and relaxation
          </p>
        </div>

        
        <div className="mt-5">
          <img
            src="https://inthekitchen.org/wp-content/uploads/2017/03/Fun-Facts-of-Black-Tea-2-1.jpg"
            alt="Tea cup"
            className="rounded shadow"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "15px" }}
          />
          <p><h3 className="mt-4 fw-bold text-success">2️⃣ Black Tea</h3> – Overview
Black tea is a fully oxidized tea from the Camellia sinensis plant. It has a strong flavor, dark color, and rich aroma, making it perfect for mornings or meals. 
 <b>  Benefits:</b>
Boosts energy and alertness (contains caffeine)
Supports heart health and circulation
Contains antioxidants for overall wellness</p>
        </div>

        <div className="mt-5">
          <img
            src="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg"
            alt="Tea cup"
            className="rounded shadow"
            style={{ width: "80%", maxWidth: "600px", borderRadius: "15px" }}
          />
          <p><h3 className="mt-4 fw-bold text-success">3️⃣ Masala Chai </h3> – Overview
Masala Chai is Indian spiced tea made by brewing black tea with aromatic spices, milk,dark color co and sugar.  It’s warming, flavorful.<br></br>
<b>Benefits:</b>
Aids digestion with spices like ginger, cardamom, and cinnamon
Boosts immunity naturally
Energizing and comforting</p>
        </div>

        
        <div className="mt-5">
          <img
            src="https://images.pexels.com/photos/5946972/pexels-photo-5946972.jpeg"
            alt="Tea cup"
            className="rounded shadow"
            style={{ width: "80%", maxWidth: "600px", maxHeight:"300px", borderRadius: "15px" }}
          />
       <p><h3 className="mt-4 fw-bold text-success">4️⃣ Herbal Tea </h3> – Overview
Herbal Tea is made from herbs, flowers, and fruits, not the tea plant. It’s naturally caffeine-free and offers soothing flavors and wellness benefits.
<br></br>
<b> Benefits: </b>
Calms the mind and reduces stress
Supports digestion and immunity
Rich in vitamins and antioxidants</p>
        </div>

      </div>
    </div>
     {/* ✅ Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        © {new Date().getFullYear()} TeaLovers | Brewed with ❤️ by Gaurav
      </footer>
      </div>
  )
}

