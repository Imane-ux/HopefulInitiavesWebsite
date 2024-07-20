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
    const [localAddress, setLocalAddress] = useState('');
    const [errors, setErrors] = useState({});

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
  const handleAddressChange = (event) => {
    setLocalAddress(event.target.value);
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
    setLocalAddress('');
    //setShowMessage(false); 
  };

  const handleSubmit = () => {
    
    let formIsValid = true;
    const errors = {};

    if (!description.trim()) {
      errors.description = 'Description is required';
      formIsValid = false;
    }
    if (!localAddress.trim()) {
      errors.localAddress = 'Local address is required';
      formIsValid = false;
    } else if (!/^[\w\s\d,-]+$/.test(localAddress.trim())) {
      errors.localAddress = 'Invalid address format';
      formIsValid = false;
    }

    if (!selectedAge) {
      errors.selectedAge = 'Age selection is required';
      formIsValid = false;
    }

    if (!selectedCategory) {
      errors.selectedCategory = 'Category selection is required';
      formIsValid = false;
    }

    if (!selectedCity) {
      errors.selectedCity = 'City selection is required';
      formIsValid = false;
    }

    if (!dateTime.date) {
      errors.date = 'Date is required';
      formIsValid = false;
    }

    if (!dateTime.time) {
      errors.time = 'Time is required';
      formIsValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      formIsValid = false;
    }

    if (!phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
      formIsValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
      formIsValid = false;
    }

    setErrors(errors);

    if (formIsValid) {
      if (window.confirm('Are you sure you want to submit with the entered details?')) {
        
        setTimeout(() => {
          setShowMessage(true);
          handleReset();
        }, 1000);
      }
    }
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
        <h2> 1. Select an event picture: </h2>
        <ImageSelector/>
        <h2> 2. Enter a description for your requested event: *</h2>
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
            {errors.description && <p className='error'>{errors.description}</p>}
        </div>
        <h2> 3. Enter the category of your event and age of your expected audience</h2>
        <div className='groupInput'>
            <div>
                <label>Age: *</label>
                <select value={selectedAge} onChange={handleAgeChange} className="custom-select">
                    <option value="" disabled className="placeholder">Select Age</option>
                    <option value="No restriction (all)">No restriction (all)</option>
                    <option value="Adult">Adult</option>
                    <option value="Youth (4-17)">Youth (4-17)</option>
                </select>
                {errors.selectedAge && <p className='error'>{errors.selectedAge}</p>}
            </div>
            <div>
                <label>Category: *</label>
                <select value={selectedCategory} onChange={handleCategoryChange} className="custom-select">
                    <option value="" disabled className="placeholder">Select Category</option>
                    <option value="Annual Events">Annual Events</option>
                    <option value="Monthly Events">Monthly Events</option>
                    <option value="Weekly Events">Weekly Events</option>
                </select>
                {errors.selectedCategory && <p className='error'>{errors.selectedCategory}</p>}
            </div>
        </div>
        <h2> 3. Enter the date and time of your event</h2>
        <div className='groupInput'>
            <div>
                <label>Date: * </label>
                    <input
                    type="date"
                    value={dateTime.date}
                    onChange={handleDateChange}
                    />
                    {errors.date && <p className='error'>{errors.date}</p>}
            </div>
            <div>
                <label>Time: * </label>
                    <input
                    type="time"
                    value={dateTime.time}
                    onChange={handleTimeChange}
                    />
                    {errors.time && <p className='error'>{errors.time}</p>}
            </div>
        </div>
        <h2> 4. Enter the location of your event </h2>
        <div className='groupInput'>
            <div>
              <label>
                  Location Address: *
                  <input type="text" placeholder="Enter address of event" value={localAddress} onChange={handleAddressChange} />
              </label>
              {errors.localAddress && <p className="error">{errors.localAddress}</p>}
            </div>
            <div>
                <label>City: *</label>
                <select value={selectedCity} onChange={handleCityChange} className="custom-select">
                    <option value="" disabled className="placeholder">Select City</option>
                    <option value="Ottawa">Ottawa</option>
                    <option value="Gatineau">Gatineau</option>
                </select>
                {errors.selectedCity && <p className='error'>{errors.selectedCity}</p>}
            </div>
        </div>

        <h2> 5. Enter your contact information</h2>
        <div className='groupInput'>
            <div>
              <label>
                  Email Address: *
                  <input type="text" value={email} onChange={handleEmailChange} placeholder="Enter email address"/>
              </label>
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div>
              <label>
                  Phone number: *
                  <input type="text" value={phoneNumber} onChange={handlePhoneChange} placeholder="Enter phone number"/>
              </label>
              {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
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
