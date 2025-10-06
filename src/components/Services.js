import React from "react";
import { Link } from "react-router-dom";
import customer1 from "../images/customer1.jpg";
import customer2 from "../images/customer2.jpg";
import customer3 from "../images/customer3.jpg";

const Services = () => {
  return (
    <section>
      <h2>Services</h2>

      {/* Hero Section */}
      <div className="hero-section">
        <h3>Exceptional Services for Every Occasion</h3>
        <p>
          From fine dining to private events, Little Lemon brings warmth and
          flavor to every table.
        </p>
        <Link to="/Booking" className="btn">
          Reserve a Table
        </Link>
      </div>

      {/* Services Grid */}
      <div className="services-list">
        <div className="service-item">
          <h4>Dine-In</h4>
          <p>
            Experience the ambiance of our cozy restaurant while enjoying our
            delicious Mediterranean cuisine.
          </p>
        </div>
        <div className="service-item">
          <h4>Takeout</h4>
          <p>
            Order your favorite dishes online and pick them up at your
            convenience.
          </p>
        </div>
        <div className="service-item">
          <h4>Delivery</h4>
          <p>
            Receive your favorite dishes delivered straight to your doorstep.
          </p>
        </div>
        <div className="service-item">
          <h4>Catering</h4>
          <p>
            Let us cater your next event with our exquisite menu options and
            exceptional service.
          </p>
        </div>
        <div className="service-item">
          <h4>Private Events</h4>
          <p>Host your special occasions in our elegant private dining area.</p>
        </div>
        <div className="service-item">
          <h4>Cooking Classes</h4>
          <p>
            Join our chefs for hands-on cooking classes and learn to make
            Mediterranean dishes.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h3>What Our Customers Say</h3>
        <div className="testimonials-slider">
          <div className="testimonial">
            <img src={customer1} alt="Customer 1" />
            <div className="stars">★★★★★</div>
            <p>
              "The food and service at Little Lemon exceeded my expectations.
              Highly recommend!"
            </p>
            <span>- Madie Fadel</span>
          </div>

          <div className="testimonial">
            <img src={customer2} alt="Customer 2" />
            <div className="stars">★★★★☆</div>
            <p>
              "A wonderful experience. The private event setup was elegant and
              flawless."
            </p>
            <span>- Anais Gleason</span>
          </div>

          <div className="testimonial">
            <img src={customer3} alt="Customer 3" />
            <div className="stars">★★★★★</div>
            <p>
              "Delivery was quick, and the food arrived hot and delicious. Great
              job!"
            </p>
            <span>- Billie Grady</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
