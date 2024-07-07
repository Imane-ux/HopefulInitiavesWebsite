import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='column1'>
        <h2> Hopeful Intiatives</h2>

        {/* icons inserted here in another div to add spacing*/}

      </div>
      <div id='footer' className='columns'>
            <div className='column'>
                <h4> Events</h4>
                <hr />
                <br />
                <ul>
                    <li> Annual Events</li>
                    <li> Monthly Events</li>
                    <li> Weekly Events</li>
                </ul>
            </div>
            <div className='mt-5 column'>
                <h4> Volunteer</h4>
                <hr />
                <ul>
                    <li> Host your Event</li>
                    <li> General Volunteers</li>
                </ul>
                <br />
                <h4> About</h4>
                <hr />
                <ul>
                    <li><a href="#about">About us</a></li>
                </ul>
            </div>
            <div className='column'>
                <h4> Contact Us</h4>
                <hr />
                <br />
                    <ul>
                        <li> 613-222-2222</li>
                        <li> hopeful@initiatives.ca</li>
                    </ul>
                    <br />
                    <br />
                <p> All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
