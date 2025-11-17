

import React, { useRef } from "react";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';




function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wn91wp",      // Replace with your EmailJS service ID
        "template_h4mqs9w",     // Replace with your EmailJS template ID
        form.current,
        "0hzGXMWPrWZnCmmvP"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div>
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
   
    >
      <div
        className="p-5 rounded shadow-lg text-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h2 className="text-success mb-4 fw-bold"> Contact Us</h2>
        <p className="text-muted mb-4">
          We’d love to hear from you! Whether it’s feedback, a question, or just
          to say hi — drop us a message below. 🍃
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            Send Message ☕
          </button>
        </form>
      </div>
    </div>
     
     {/* ✅ Footer */}
      <footer className="bg-success text-white text-center py-3 mt-5">
        © {new Date().getFullYear()} TeaLovers | Brewed with ❤️ by Gaurav
      </footer>
      </div>
  );
}

export default Contact;
