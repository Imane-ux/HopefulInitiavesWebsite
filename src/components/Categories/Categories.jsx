import React from 'react'
import './Categories.css'
import event_1 from '../../assets/event.jpg'
import event_2 from '../../assets/event2.jpg'
import event_3 from '../../assets/event3.jpg'

const Categories = () => {
  return (
    <div>
      <div className='title'>
        <h2> Our Local Events Categories</h2>
      </div>
      <div className='categories'>
          <div className='category'>
              <img src={event_1} alt="" />
              <h4> Weekly Events</h4>
              <div className="caption">
                <p> These are events that happen on a weekly basis. You get to build stonger friendships and connections!</p>
              </div>
          </div>
          <div className='category'>
              <img src={event_2} alt="" />
              <h4> Monthly Events</h4>
              <div className="caption">
                <p> These are events that happen on a Monthly basis. Largely preferred by working individuals looking for community engagement!</p>
              </div>
          </div>
          <div className='category'>
              <img src={event_3} alt="" />
              <h4> Annual Events</h4>
              <div className="caption">
                <p> These are events that occur once a year. They're usualy bigger events that have activities for all kinds of age groups!</p>
              </div>
          </div>
        
      </div>
      </div>
  )
}

export default Categories
