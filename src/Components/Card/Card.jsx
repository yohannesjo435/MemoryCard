import React from 'react'

export default function Card({cardImage}) {
  return (
    <div className='card'>
      <img src={cardImage}/>

      <div className='cardName'>Naruto Uzumaki</div>
    </div>
  )
}

