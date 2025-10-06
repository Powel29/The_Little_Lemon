import BookingForm from "./BookingForm";
import Menu from "./Menu";
import React from 'react'

const Booking = (props) => {
  return (
  <>
    <BookingForm submitForm={props.submitForm}/>
    <Menu />
  </>
  )
}

export default Booking;