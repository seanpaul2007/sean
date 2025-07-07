import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Footer from './Footer';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Luxury Services !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
                   <ul className='cards__items'>
            <CardItem
              src='images/pool.jpg'
              text='24/7 pool service with exclusive packages '
              label='lUxury'
              path='/sign-up'
            />
            <CardItem
              src='images/radi.jpg'
              text='Beautiful view of our luxury hotel'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/room service.jpg'
              text='24/7 room service  '
              label='Luxury'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Move around the ocean with our boat cruise '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='watch the sunset with a beautiful view'
              label='Nature'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Luxury'
              path='/sign-up'
            />
            <CardItem
              src='images/resutrant.jpg'
              text='24/7 open buffe in our resturant '
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/eko.jpg'
              text='branches from around the world '
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/gym.jpg'
              text='24/7 gym services '
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/Casablanca.jpg'
              text='we offer happy services'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;