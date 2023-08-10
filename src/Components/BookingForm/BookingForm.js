import React from 'react'
function BookingForm(props) {

  const onDateChange = (e) => {
    props.setDate(e.target.value)
    const newTimes = props.updateTimes(e.target.value)
    console.log(newTimes)
    props.dispatch({type: 'update', payload: newTimes})
  }
  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={props.onsubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={props.date} onChange={onDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={props.time}onChange={(e)=> props.setTime(e.target.value)}>
            {props.availabletimes.map((time) => ( <option key={time}>{time}</option>))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={props.guests} onChange={(e)=> props.setGuests(e.target.value)} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={props.occasion} onChange={(e) => props.setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        
        <input type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm