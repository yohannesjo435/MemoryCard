import React from 'react'

export default function Card({cardImage, handleClick, title}) {
  return (
    <div className='card' onClick={handleClick}>
      <img src={cardImage}/>

      <div className='cardName'>{title}
        
      </div>
    </div>
  )
}

