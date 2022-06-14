import React from 'react'

export const Home = () => {
  return (
    <div>
      <div className="background">
        <img src={window.location.origin + "/images/background.jpg"} alt="Rick and Morty jumping through a portal" style={{width: "60%"}}/>
      </div>
      <div className="mission"></div>
    </div>
  )
}
