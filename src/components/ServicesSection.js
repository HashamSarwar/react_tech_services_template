import React from 'react'
import './ServicesSection.css'

export default function ServicesSection() {
    const serivce = require('./assets/service.png');
  return (
   <>
   <div id='services' className='services-section-parent'>
    <h1>Services</h1>
   <div className='services-section'>
    <div>
        <img src={serivce}/>
        <h2>Service #1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id odio vel justo laoreet volutpat. Sed nec risus nec ipsum venenatis tincidunt in vel ex. </p>
        <a href="#">Explore</a>
    </div>
    <div>
    <img src={serivce}/>
        <h2>Service #2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id odio vel justo laoreet volutpat. Sed nec risus nec ipsum venenatis tincidunt in vel ex. </p>
        <a href="#">Explore</a>
    </div>
    <div>
    <img src={serivce}/>
        <h2>Service #3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id odio vel justo laoreet volutpat. Sed nec risus nec ipsum venenatis tincidunt in vel ex. </p>
        <a href="#">Explore</a>
    </div>
   </div>
   </div>
   </>
  )
}
