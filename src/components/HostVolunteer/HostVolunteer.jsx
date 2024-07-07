import React, { useRef, useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar'
import './HostVolunteer.css'
import hands from '../../assets/hands.png'
import ImageSelector from './ImageSelector'

const HostVolunteer = () => {
    const [description, setDescription] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [dateTime, setDateTime] = useState({
        date: '',
        time: ''
      });
    const [showMessage, setShowMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
};

const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
};

const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);

};
const handleDateChange = (event) => {
    setDateTime({ ...dateTime, date: event.target.value });
  };

  const handleTimeChange = (event) => {
    setDateTime({ ...dateTime, time: event.target.value });
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };


  const handleReset = () => {
    setDescription('');
    setSelectedAge('');
    setSelectedCity('');
    setSelectedCategory('');
    setDateTime({
      date: '',
      time: ''
    });
    setEmail('');
    setPhoneNumber('');
    //setShowMessage(false); 
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setShowMessage(true);
      handleReset();
    }, 1000);
  };

  const messageRef = useRef(null);

  // Effect to scroll to the bottom when showMessage becomes true
  useEffect(() => {
        if (showMessage && messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showMessage]);

  return (
    <div className='hostEvent'>
        <Navbar/>
      <div className='part1'>
        <p>Get Started by personalizing your next non-profit event to help us bring the community together and raise money towards charity.</p>
        <img src={hands} alt="" className='imgP' />
      </div>
      <div className='part2'>
        <h2> 1. Select an event picture</h2>
        <ImageSelector/>
        <h2> 2. Enter a description for your requested event</h2>
        <div>
            <textarea
                value={description}
                onChange={handleChange}
                placeholder="Enter event description (max 200 words)"
                maxLength={200}
                rows={5} // Adjust the number of rows as needed
                style={{ width: '80%', padding: '10px', fontSize: '16px', border:'none', borderRadius:'20px', display:'flex', marginLeft:'4rem' }}
            />
            <p>Characters left: {200 - description.length}</p>
        </div>
        <h2> 3. Enter the category of your event and age of your expected audience</h2>
        <div className='groupInput'>
            <div>
                <label>Age:</label>
                <select value={selectedAge} onChange={handleAgeChange} className="custom-select">
                    <option value="">All Ages</option>
                    <option value="No restriction (all)">No restriction (all)</option>
                    <option value="Adult">Adult</option>
                    <option value="Youth (4-17)">Youth (4-17)</option>
                </select>
            </div>
            <div>
                <label>Category:</label>
                <select value={selectedCategory} onChange={handleCategoryChange} className="custom-select">
                    <option value="">--</option>
                    <option value="Annual Events">Annual Events</option>
                    <option value="Monthly Events">Monthly Events</option>
                    <option value="Weekly Events">Weekly Events</option>
                </select>
            </div>
        </div>
        <h2> 3. Enter the date and time of your event</h2>
        <div className='groupInput'>
            <div>
                <label>Date:</label>
                    <input
                    type="date"
                    value={dateTime.date}
                    onChange={handleDateChange}
                    />
            </div>
            <div>
                <label>Time:</label>
                    <input
                    type="time"
                    value={dateTime.time}
                    onChange={handleTimeChange}
                    />
            </div>
        </div>
        <h2> 4. Enter the location of your event </h2>
        <div className='groupInput'>
            <div>
            <label>
                Location Address:
                <input type="text" />
            </label>
            </div>
            <div>
                <label>City:</label>
                <select value={selectedCity} onChange={handleCityChange} className="custom-select">
                    <option value="">--</option>
                    <option value="Ottawa">Ottawa</option>
                    <option value="Gatineau">Gatineau</option>
                </select>
            </div>
        </div>

        <h2> 5. Enter your contact information</h2>
        <div className='groupInput'>
            <div>
            <label>
                Email Address:
                <input type="text" value={email} onChange={handleEmailChange}/>
            </label>
            </div>
            <div>
            <label>
                Phone number:
                <input type="text" value={phoneNumber} onChange={handlePhoneChange} />
            </label>
            </div>
        </div>

        <div>
            <br />
            <button type="button" className="filter-button" onClick={handleSubmit}>
                Submit Request
            </button>
            <br />
            <div ref={messageRef} className={`message ${showMessage ? 'show' : ''}`}>
                Your form has been received. Please allow 3-4 business days to process your request.
                Thank you for taking initiative and  volunteering with us!
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default HostVolunteer
