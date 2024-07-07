import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../assets/hostEvent.jpg'
import img2 from '../../assets/volunteerG.jpg'


const CardSection = () => {
  return (
    <div className="container py-2">
      <CardGroup className="d-flex justify-content-center">
        <Card className="d-flex m-3 text-center border-0 shadow" style={{ borderRadius: '20px' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Card.Img
              variant="top"
              src={img1}
              alt="Host your Event"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <Card.Body>
            <Card.Title>Host your Event</Card.Title>
            <hr /> {/* Break line */}
            <Card.Text>
              Steps to host a non-profit event under "Hopeful Initiatives".
            </Card.Text>
            <Link to="/card1" style={{ textDecoration: 'none' }}>
              <Button variant="info" className="rounded-pill" style={{ backgroundColor:'#10453c', color:'white' }}>Get Started</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className="d-flex m-3 text-center border-0 shadow" style={{ borderRadius: '20px' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Card.Img
              variant="top"
              src={img2}
              alt="General Support Volunteers"
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <Card.Body>
            <Card.Title  className="mb-3">General Support Volunteers</Card.Title>
            {/* <Card.Title  className="mb-3">General Support Volunteers</Card.Title>*/}
            <hr /> {/* Break line */}
            <Card.Text>
              Versatile volunteers supporting events for successful outcomes.
            </Card.Text>
            <Link to="/card2" style={{ textDecoration: 'none' }}>
              <Button variant="info" className="rounded-pill" style={{ backgroundColor:'#10453c', color:'white' }}>Get Started</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardSection;