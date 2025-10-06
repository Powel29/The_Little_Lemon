import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ConfirmedBooking = () => {
  return (
    <section className="confirmation-page">
      <div className="confirmation-card">
        <CheckCircle className="check-icon" />
        <h1>
          Booking <span>Confirmed!</span>
        </h1>
        <p>
          Thank you for choosing <strong>Little Lemon</strong>! We’ve received
          your reservation details and look forward to serving you soon.
        </p>
        <div className="btn-group">
          <Link to="/menu" className="btn-secondary">
            View Menu
          </Link>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
