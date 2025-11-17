





import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cust_home() {
  const dispatch = useDispatch();
  const Cust_status = useSelector((state) => state.Cust_status);

  // ✅ Tea records with different images
  const [record] = useState([
    {
      id: 1,
      title: "Green Tea",
      image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg",
      description: "🌱 Experience natural freshness with every sip of our premium Green Tea.",
    },
    {
      id: 2,
      title: "Black Tea",
      image: "https://inthekitchen.org/wp-content/uploads/2017/03/Fun-Facts-of-Black-Tea-2-1.jpg",
      description: "☕Bold, rich, and full-bodied — the perfect boost to start your day.",
    },
    {
      id: 3,
      title: "Masala Chai",
      image: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
      description: " 🌶️A spicy blend of tea and tradition — warmth and flavor in every cup.",
    },
    {
      id: 4,
      title: "Herbal Tea",
      image: "https://images.pexels.com/photos/5946972/pexels-photo-5946972.jpeg",
      description: "🌸Naturally caffeine-free and soothing — your cup of calm .",
    },
  ]);

  const [liked, setLiked] = useState({});


  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "#f8f9fa", // light gray background for full page
        minHeight: "100vh",
      }}
    >
      
      {/* ✅ Header Section with Background Image */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        
        }}

      >
       
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // white transparent overlay
            padding: "30px",
            borderRadius: "15px",
            maxWidth: "900px",
          }}
        >
        
          <h2 className="fw-bold mb-4"> It's-Tea 🍃☕</h2>
          <p className="fs-5 text-dark">
            Tea is more than just a drink — it’s a moment of peace in every sip.
            From the misty hills of Assam to the gardens of Darjeeling, each
            leaf carries a story of nature’s beauty. Whether you love the bold
            taste of black tea or the calm of green tea, every flavor brings its
            own charm. <br />
            A hot cup of tea refreshes your mind, soothes your soul, and
            connects people together. It’s perfect for early mornings, rainy
            evenings, or quiet nights under the stars. <br />
            At <b>TeaLovers</b>, we bring you handpicked teas made with care and
            passion. Each blend is crafted to give you the finest experience.
          </p>
        </div>
      </div>

      {/* ✅ Tea List Section */}
      <div className="container my-5">
        <h2>
          <b className="border border-success rounded p-3 my-4 text-center bg-success-subtle">
            ☕ Tea Item List 🍃
          </b>
        </h2>
<br></br>
<br></br>
        <div className="row">
          {record.map((x, index) => (
            <div key={x.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={x.image}
                  className="card-img-top"
                  alt={x.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>
                  <p className="card-text">{x.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                 
<div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
</svg>



</div>



                    <Link to="/About" className="card-link">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        © {new Date().getFullYear()} TeaLovers | Brewed with ❤️ by Gaurav
      </footer>
    </div>
  );
}

export default Cust_home;
