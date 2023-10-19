import React from "react";
import "./contact.css";
import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquires, please feel free to get in
            touch with us using the form below:
          </p>

          <form>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Your name" />

            <label>Email:</label>
            <input type="email" name="email" placeholder="Your email" />

            <label>Message:</label>
            <textarea name="message" placeholder="Your message"></textarea>
            <Button title="Submit" />
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Digital Pathshala. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
