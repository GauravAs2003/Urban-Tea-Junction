import React from 'react'

export const Cust_service = () => {
 const services = [
    {
      title: "Premium Teas",
      description:
        "Handpicked Green Tea, Black Tea, Masala Chai, and Herbal blends for every taste.",
      icon: "🍃",
    },
    {
      title: "Tea Delivery",
      description:
        "Fresh tea delivered to your doorstep, ensuring quality and freshness every time.",
      icon: "🚚",
    },
    {
      title: "Tea Workshops",
      description:
        "Learn the art of brewing, tasting, and blending teas with our expert guides.",
      icon: "🎓",
    },
    {
      title: "Brewing Tips",
      description:
        "Get easy-to-follow guides for brewing the perfect cup of tea at home.",
      icon: "☕",
    },
  ];

  return (
    <div>
    <div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container text-center">
        {/* <h1 className="text-success fw-bold mb-5"> Our Services ☕🍃</h1> */}

        <h1>
         <b className="border border-success rounded p-3 my-4 text-center bg-success-subtle text-success mb-4 fw-bold"> Our Services ☕🍃</b>
         </h1>
         <br></br>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm p-3">
                <div
                  className="display-4 mb-3"
                  style={{ fontSize: "3rem", lineHeight: "1" }}
                >
                  {service.icon}
                </div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
        {/* ✅ Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        © {new Date().getFullYear()} TeaLovers | Brewed with ❤️ by Gaurav
      </footer>
    </div>

  );
};

