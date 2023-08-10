import React from 'react'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import './BookingPage.css'
import BookingForm from '../Components/BookingForm/BookingForm'
function BookingPage() {
  return (
    <>
        <Nav />
        <div className='Booking-container'>
            <BookingForm />
        </div>
        <Footer />
    </>
  )
}

export default BookingPage