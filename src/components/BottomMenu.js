import './BottomMenu.css'
import React from 'react'

export default function BottomMenu() {
    const facebook = require('./assets/facebook_white.png');
    const instagram = require('./assets/instagram_white.png');
    const linkedin = require('./assets/linkedin_white.png');
    const next = require('./assets/next_white.png');
  return (
    <div className='bottom-menu-parent'>
      <div>
        <h1>Company Name</h1>
        <p>company address</p>
      </div>
      <div>
        <h1>Useful Links</h1>
        <a href="#"><img src={next}/>Home</a>
        <a href="#"><img src={next}/>Services</a>
        <a href="#"><img src={next}/>Products</a>
        <a href="#"><img src={next}/>Clients</a>
        <a href="#"><img src={next}/>Contact</a>
        <a href="#"><img src={next}/>About</a>
      </div>
      <div>
        <h1>Our Services</h1>
        <a href="#"><img src={next}/>Android Development</a>
        <a href="#"><img src={next}/>Web Development</a>
        <a href="#"><img src={next}/>Cryptographic Algorithms</a>
      </div>
      <div>
        <h1>Our Social Networks</h1>
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={linkedin}/>
      </div>
    </div>
  )
}
