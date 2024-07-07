import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-text">
        <h1> Find Your Next Meaningful Event with Hopeful Initiatives! </h1>
        {/*  <div className="heroSearchBox">
            <div className="filter-box">
                <label htmlFor="filter1">Category:</label>
                <select id="filter1">
                    <option value="Weekly Events">Weekly Events</option>
                    <option value="Monthly Events">Monthly Events</option>
                    <option value="Annual Events">Annual Events</option>
                </select>
            </div>
            <div className="filter-box">
                <label htmlFor="filter2">City:</label>
                <select id="filter2">
                    <option value="Ottawa">Ottawa</option>
                    <option value="Gatineau">Gatineau</option>
                </select>
            </div>
            <div className="filter-box">
                <label htmlFor="filter3">Age:</label>
                <select id="filter3">
                    <option value="No restriction (all)">No restriction (All Ages)</option>
                    <option value="Youth (4-17)">Youth (4-17)</option>
                    <option value="Adult">Adult (18+)</option>
                  
                </select>
            </div>
            <button className="filter-button">Apply Filters</button>
            <Link to="/card1" style={{ textDecoration: 'none' }}>
              <Button variant="info" className="rounded-pill" style={{ backgroundColor:'#10453c', color:'white' }}>Get Started</Button>
            </Link>
      </div> 
    */}
        <Link to="events" style={{ textDecoration: 'none' }}>
          <button className="filter-button">Explore events now!</button>
        </Link>

      </div>
    </div>
  )
}

export default Hero
