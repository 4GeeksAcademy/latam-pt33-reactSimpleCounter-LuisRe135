import React from 'react';
import Card from './Card';


const SecondsCounter = ({segundos}) => {
   
   return (
      <div className='container-fluid d-flex justify-content-center gap-2 bg-dark'>
         <Card number={(Math.floor(segundos % 1000000 / 100000))} />
         <Card number={(Math.floor(segundos % 100000 / 10000))} />
         <Card number={(Math.floor(segundos % 10000 / 1000))} />
         <Card number={(Math.floor(segundos % 1000 / 100))} />
         <Card number={(Math.floor(segundos % 100 /10))} />
         <Card number={(Math.floor(segundos)% 10)} />

      </div>
   )
}

export default SecondsCounter;