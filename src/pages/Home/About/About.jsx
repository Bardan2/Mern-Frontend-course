import React from "react";
import Navbar from "../../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
            urna at efficitur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas semper augue sit amet laoreet scelerisque.
            Proin eget dolor enim, a consectetur nisi. In hac habitasse platea
            dictumst. Curabitur at aliquam lorem. Ut nec libero dui. Maecenas
            eget odio nec nunc sodales mollis. This is 50 words of Lorem Ipsum,
            a placeholder text that is commonly used in web design and
            typography. It is made up of nonsensical Latin words that have been
            rearranged to create a text that is readable but meaningless. This
            makes it ideal for use as a placeholder for real content, as it
            allows designers and developers to see how their work will look
            without having to worry about the actual content. Lorem Ipsum is a
            very old text, dating back to the 1500s. It is thought to be a
            corruption of a passage from Cicero's De finibus bonorum et malorum,
            but the exact origin is unknown. Despite its age, Lorem Ipsum
            remains one of the most popular placeholder texts in the world.
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Digital Pathshala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
