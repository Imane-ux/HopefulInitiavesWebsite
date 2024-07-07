import React, { useState, useEffect } from 'react';
import './Events.css'
import Navbar from '../Navbar/Navbar'
import logo0 from '../../assets/LCME-Icon2-2.png'
import { eventsData } from '../Data/data'

const Events = () => {
  const [events, setEvents] = useState(eventsData);
    const [filteredEvents, setFilteredEvents] = useState(eventsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        filterEvents();
    }, [searchTerm, selectedAge, selectedCity, selectedCategory]);

    const filterEvents = () => {
        let filtered = eventsData.filter(event =>
            event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedAge ? event.age === selectedAge : true) &&
            (selectedCity ? event.city === selectedCity : true) &&
            (selectedCategory ? event.category === selectedCategory : true)
        );
        setFilteredEvents(filtered);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
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


  return (
    <div className='events'>
      <Navbar/>
      <div className='events-content'>
        <h2>Event Search Filters</h2>
        {/* Other content related to events */}
        <div className="searchBox">
            <img src={logo0} alt="" style={{width: "100px", height: "100px"}}/>
            <input type="text" placeholder="Search by event title..." value={searchTerm} onChange={handleSearchChange} style={{ 
              padding: '6px', 
              marginRight: '15px', 
              flex: '1',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px'
            }} />
            <label>Age:</label>
            <select value={selectedAge} onChange={handleAgeChange} className="custom-select">
                <option value="">All Ages</option>
                <option value="No restriction (all)">No restriction (all)</option>
                <option value="Adult">Adult</option>
                <option value="Youth (4-17)">Youth (4-17)</option>
            </select>
            <label>City:</label>
            <select value={selectedCity} onChange={handleCityChange} className="custom-select">
                <option value="">All Cities</option>
                <option value="Ottawa">Ottawa</option>
                <option value="Gatineau">Gatineau</option>
            </select>
            <label>Category:</label>
            <select value={selectedCategory} onChange={handleCategoryChange} className="custom-select">
                <option value="">All Categories</option>
                <option value="Annual Events">Annual Events</option>
                <option value="Monthly Events">Monthly Events</option>
                <option value="Weekly Events">Weekly Events</option>
            </select>
            </div>
        <div className="events-list">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event">
                        <div className='event-img'>
                          
                          <img src={event.eventImage} alt={event.eventImage} style={{ maxWidth: '100%' }} />
                        </div>
                        <div className='event-info'>
                          <h3>{event.eventTitle}</h3>
                          <br />
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Description:</p>
                            <p>{event.description}</p>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Date, Time and Address::</p>
                            <p>{event.dateTimeAddress}</p>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Age:</p>
                            <p>{event.age}</p>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>Category:</p>
                            <p>{event.category}</p>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginRight: '10px' }}>City:</p>
                            <p>{event.city}</p>
                          </div>

                        </div>
                    </div>
                ))}
            
        </div>
      </div>
    </div>
  )
}

export default Events
