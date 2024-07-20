import React, {useRef,useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar'
import './RegisterVolunteer.css'

const RegisterVolunteer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [availability, setAvailability] = useState('');
    const [errors, setErrors] = useState({});
    const [showMessage, setShowMessage] = useState(false);

    const handleReset = () => {
      setName('');
      document.getElementById('nameInput').innerHTML='';
      setEmail('');
      setAvailability('');
      setErrors('');
    };

    const handleSubmitB = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        // Fetching values 
        const nameValue = name;
        const emailValue = email;
        const availValue = availability;

        /*const nameValue = document.getElementById('nameInput').value;
        const emailValue = document.getElementById('emailInput').value;
        const availValue = document.getElementById('availabilityInput').value;*/
    
        console.log('Name:', nameValue);
        console.log('Email:', emailValue);
        console.log('avail:', availValue);

        // Validating inputs
        let formIsValid = true;
        const errors = {};

        if (!nameValue.trim()) {
          errors.nameValue = 'Name is required';
          formIsValid = false;
      }

      if (!emailValue.trim()) {
          errors.emailValue = 'Email is required';
          formIsValid = false;
      } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
        errors.emailValue = 'Email address is invalid';
        formIsValid = false;
      }

      if (!availValue.trim()) {
          errors.availValue = 'Availability field is required';
          formIsValid = false;
      }

      setErrors(errors);

    if (formIsValid) {
      if (window.confirm('Are you sure you want to submit with the entered details?')) {
        
        setTimeout(() => {
          setName(nameValue);
          setEmail(emailValue);
          setAvailability(availValue);
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
    <div className='registerVolunteer'>
      <Navbar/>
      <div className='partie1'>
            <h4> As a Valuable Volunteer Member:</h4>
            <div className='box'>
                <p>Volunteers play a pivotal role in executing various tasks that ensure the smooth running of events, such as logistical coordination, participant engagement, and administrative support. From planning and setting up venues to assisting attendees and managing activities, volunteers contribute their time and skills to create memorable and impactful experiences. This text offers insights into the diverse responsibilities volunteers undertake, highlighting their crucial role in fostering community engagement and enriching event experiences for all involved.</p>
            </div>
            <br />
      </div>
      <h4> Become a Valuable Volunteer Member:</h4>
      <div className='partie2'>
            <div className='column1'>
            
                <h6> Enter your name: *</h6>
                <h6> Enter your email: *</h6>
                
                <h6> Enter your availabilities: *</h6>
            </div>
            <div className='column2'>
                <input type="text" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                {errors.nameValue && <p className="error">{errors.nameValue}</p>}
                <input type="text" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                {errors.emailValue && <p className="error">{errors.emailValue}</p>}
                <input type="text" id="availabilityInput" value={availability} onChange={(e) => setAvailability(e.target.value)} placeholder='availability'/>
                {errors.availValue && <p className="error">{errors.availValue}</p>}
            </div>
      </div>
      <button type="button" className="filter-button" onClick={handleSubmitB}>
                Submit 
      </button>
      <br />
            <div ref={messageRef} className={`message ${showMessage ? 'show' : ''}`}>
                Your form has been received. Please allow 3-4 business days to process your request.
                Thank you for taking initiative and  volunteering with us!
            </div>
    </div>
  )
}

export default RegisterVolunteer
