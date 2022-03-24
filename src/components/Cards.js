import React from 'react'
import CardItem from './CardItem'
import '../assets/css/Cards.css'
import Image1 from '../assets/img/img-1.jpg'
import Image2 from '../assets/img/img-2.jpg'
import Image3 from '../assets/img/img-3.jpg'
import Image4 from '../assets/img/img-4.jpg'
import Image5 from '../assets/img/img-5.jpg'
import Image6 from '../assets/img/img-6.jpg'
import Image7 from '../assets/img/img-7.jpg'
import Image8 from '../assets/img/img-8.jpg'
import Image9 from '../assets/img/img-9.jpg'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Image2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Image4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={Image8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards