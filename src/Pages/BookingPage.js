import React from 'react'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import './BookingPage.css'
import BookingForm from '../Components/BookingForm/BookingForm'
import { useState, useReducer, useEffect } from 'react'
import { fetchAPI,submitAPI } from '../API'

const availabletimesReducer = (state, action)=> {
  switch (action.type) {
    case 'update':
      return action.payload
    default:
      throw new Error()
  }
}


const updateTimes = (selectedDate) => {
  const date = new Date(selectedDate)
  const times = fetchAPI(date)
  return times
};

const initializeTimes = () => {
  const date = new Date()
  const times = fetchAPI(date)
  return times
}

function BookingPage() {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('20:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [availabletimes, dispatch] = useReducer(availabletimesReducer, initializeTimes())




  const onsubmit = (e) => {
    e.preventDefault()
    const formData = {
      date,
      time,
      guests,
      occasion
    }
    const result = submitAPI(formData)
    if (result) {
      alert('Booking successful')
    }
    else {
      alert('Booking failed')
    }
  }


  return (
    <>
        <Nav />
        <div className='Booking-container'>
            <BookingForm  
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availabletimes={availabletimes}
                dispatch={dispatch}
                updateTimes={updateTimes}
                onsubmit={onsubmit}
            />
        </div>
        <Footer />
    </>
  )
}

export default BookingPage