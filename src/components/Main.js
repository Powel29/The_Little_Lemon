//import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import About from "./About";
import Services from "./Services";
import Menu from "./Menu";
import Login from "./Login";

const Main = () => {
  const submitAPI = function (formData) {
    return true;
  };

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmedbooking");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<Booking submitForm={submitForm} />} />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
