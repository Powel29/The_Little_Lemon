import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BookingForm = (props) => {
  const navigate = useNavigate();
  const [data, setDate] = useState("");
  const [time, settime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date: data, time, guests, occasion };
    if (props.submitForm) {
      props.submitForm(formData);
    } else {
      navigate("/confirmedbooking");
    }
  };

  return (
    <section className="bookingform">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="booking-date">Choose date</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setDate(e.target.value)}
            id="booking-date"
            name="booking-date"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="booking-time">Choose time</label>
          <input
            type="time"
            id="booking-time"
            value={time}
            onChange={(e) => settime(e.target.value)}
            name="booking-time"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            name="guests"
            min="1"
            max="10"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Make Your reservation</button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
