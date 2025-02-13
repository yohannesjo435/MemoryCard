import React from 'react'

export default function Header({score, bestScore}) {
  console.log("Higest best score: ", bestScore)
  return (
    <header>
      <div className="logo">
        Naruto Memory Game
      </div>

      <div className='scoresWrapper'>
        <div className='score'>
          {score}
        </div>

        <div className="bestScore">
          {bestScore}
        </div>
      </div>
    </header>
  )
}
