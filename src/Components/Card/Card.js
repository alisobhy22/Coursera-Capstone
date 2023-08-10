import React from 'react'
import './Card.css'
import { ReactComponent as Delivery } from "../../Assets/delivery.svg"
function Card(props) {
  return (
    <div className='container'>
        <img className='card-image' src={props.image} width={300} height={200} alt=''></img>
        <div className="title-price">
            <h4 className='card-title'>{props.name}</h4>
            <h4 className='card-price'>${props.price}</h4>
        </div>
        <p className='card-description'>{props.description}</p>
        <div className='order-section'>
            <h4 className='order-text'>Order a delivery</h4>
            <Delivery className='delivery-icon' />
        </div>
    </div>
  )
}

export default Card