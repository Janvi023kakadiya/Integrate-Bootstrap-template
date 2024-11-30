import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function AboutSection() {
  return (
    <div className="my-5">
      <h2 className="text-center mb-4 text-primary">About Our Wines</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="border-0 shadow-lg">
            <Card.Body>
              <Card.Title className="fw-bold">Our Philosophy</Card.Title>
              <Card.Text className="text-muted">
                At Wine Shop, we believe in the art of winemaking. Each bottle is selected with care.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="border-0 shadow-lg">
            <Card.Body>
              <Card.Title className="fw-bold">Our Selection Process</Card.Title>
              <Card.Text className="text-muted">
                Every wine is chosen through a rigorous selection process for quality and taste.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AboutSection;
