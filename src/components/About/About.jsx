import React from 'react'
import './About.css'
import image1 from '../../assets/about.png'

const About = () => {
  return (
      
    <div id="about" className='about'>
        <div className='about-left'>
            <img src={image1} alt="" className='image1' />
        </div>
        <div className='about-right'>
            <h3> About Hopeful Initiatives</h3>
            <h2> Faith in The Power of a Strong Community</h2>
            <p>     At "Hopeful Initiatives," we believe in the power of community and compassion. Our mission is to bring people together through meaningful events that not only enrich lives but also make a positive impact. Since 2023, we have been dedicated to organizing events that support local charities and foster community spirit. Join us in making a difference today.</p>
            <br />
            <span className="boldText">Our Mission:</span>{' '}To foster a sense of belonging and togetherness through impactful events that promote community engagement and support charitable causes.
            <br />
            <span className="boldText">Our Vision:</span>{' '}A future where every individual feels empowered to contribute to a thriving community, creating lasting positive change through unity and compassion.
            <br />
            <span className="boldText">Get Involved:</span>{' '}Join us in spreading hope and making a difference in our community. Whether you volunteer your time, donate to our causes, or participate in our events, your support helps us strengthen the bonds that unite us all.
        </div>
    </div>
  )
}

export default About
