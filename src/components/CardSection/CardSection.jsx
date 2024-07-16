import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../assets/hostEvent.jpg'
import img2 from '../../assets/volunteerG.jpg'
import { useTranslation } from 'react-i18next'


const CardSection = () => {
  const { t} = useTranslation();
  return (
    <div className="container py-2">
      <CardGroup className="d-flex justify-content-center">
        <Card className="d-flex m-3 text-center border-0 shadow" style={{ borderRadius: '20px' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Card.Img
              variant="top"
              src={img1}
              alt={t("volunteerSection.host")}
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <Card.Body>
            <Card.Title>{t("volunteerSection.host")}</Card.Title>
            <hr /> {/* Break line */}
            <Card.Text>
              {t("volunteerSection.hostText")}
            </Card.Text>
            <Link to="/card1" style={{ textDecoration: 'none' }}>
              <Button variant="info" className="rounded-pill" style={{ backgroundColor:'#10453c', color:'white' }}>{t("getStarted")}</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className="d-flex m-3 text-center border-0 shadow" style={{ borderRadius: '20px' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <Card.Img
              variant="top"
              src={img2}
              alt={t("volunteerSection.general")}
              className="rounded-circle"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <Card.Body>
            <Card.Title  className="mb-3">{t("volunteerSection.general")}</Card.Title>
            {/* <Card.Title  className="mb-3">General Support Volunteers</Card.Title>*/}
            <hr /> {/* Break line */}
            <Card.Text>
              {t("volunteerSection.generalText")}
            </Card.Text>
            <Link to="/card2" style={{ textDecoration: 'none' }}>
              <Button variant="info" className="rounded-pill" style={{ backgroundColor:'#10453c', color:'white' }}>{t("getStarted")}</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardSection;