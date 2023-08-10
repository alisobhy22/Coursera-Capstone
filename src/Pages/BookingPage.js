import React from 'react'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import './BookingPage.css'
import BookingForm from '../Components/BookingForm/BookingForm'
import { useState, useReducer } from 'react'

const availabletimesReducer = (state, action)=> {
  switch (action.type) {
    case 'update':
      return action.payload
    case 'initialize':
      return ['17:00','18:00','19:00','20:00','21:00','22:00','23:00']
    default:
      throw new Error()
  }
}

const initializeTimes = () => {
  return ['17:00','18:00','19:00','20:00','21:00','22:00','23:00']
}

const updateTimes = (selectedDate) => {
  if (selectedDate === '2023-08-01')
    return ['17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
  else
    return ['17:00','18:00','19:00','20:00','21:00','22:00','23:00']
};

function BookingPage() {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('20:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [availabletimes, dispatch] = useReducer(availabletimesReducer, initializeTimes())



  

  const onsubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(date)
    console.log(time)
    console.log(guests)
    console.log(occasion)
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