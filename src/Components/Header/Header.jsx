import React from 'react'

export default function Header() {
  return (
    <header>
      <div className="logo">
        Naruto Memory Game
      </div>

      <div className='scoresWrapper'>
        <div className='score'>
          Score: 0
        </div>

        <div className="bestScore">
          Best Score: 0
        </div>
      </div>
    </header>
  )
}
