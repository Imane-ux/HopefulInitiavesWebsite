import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar'
import './RegisterVolunteer.css'

const RegisterVolunteer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [availability, setAvailability] = useState('');

    const handleSubmitB = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        // Fetch values using document.getElementById
        const nameValue = document.getElementById('nameInput').value;
        const emailValue = document.getElementById('emailInput').value;
        const availValue = document.getElementById('availabilityInput').value;
    
        // Display values (for demonstration)
        console.log('Name:', nameValue);
        console.log('Email:', emailValue);
        console.log('avail:', availValue);
        // You can update state variables here if needed
        setName(nameValue);
        setEmail(emailValue);
        setAvailability(availValue);
    
        // You can also perform other actions like sending data to backend, etc.
      };

  return (
    <div className='registerVolunteer'>
      <Navbar/>
      <div className='partie1'>
            <h4> As a Valuable Volunteer Member:</h4>
            <div className='box'>
                <p>Absorb Information Process, Text Description here on Information on how individuals or groups can volunteer to organize events/ what tasks they will mostly be doing....</p>
            </div>
            <br />
      </div>
      <h4> Become a Valuable Volunteer Member:</h4>
      <div className='partie2'>
            <div className='column1'>
            
                <h6> Enter your name:</h6>
                <h6> Enter your email:</h6>
                
                <h6> Enter your availabilities:</h6>
            </div>
            <div className='column2'>
                <input type="text" id="nameInput" placeholder='name' />
                <input type="text" id="emailInput" placeholder='email' />
                <input type="text" id="availabilityInput" placeholder='availability'/>
            </div>
      </div>
      <button type="button" className="filter-button" onClick={handleSubmitB}>
                Submit 
            </button>
    </div>
  )
}

export default RegisterVolunteer
