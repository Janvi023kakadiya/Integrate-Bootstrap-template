import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function FeaturedWines() {
  const wines = [
    { type: 'Red Wine', imgSrc: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?cs=srgb&dl=pexels-kenneth-1469328-2912108.jpg&fm=jpg' },
    { type: 'White Wine', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBJFsDoNe4F93TiuZyTiI4sEnv93_-neEOg&s' },
    { type: 'Rose Wine', imgSrc: 'https://images.pexels.com/photos/6314335/pexels-photo-6314335.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="my-5">
      <h2 className="text-center mb-4 text-primary">Featured Wines</h2>
      <Row>
        {wines.map((wine, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="wine-card shadow-lg">
              <Card.Img variant="top" src={wine.imgSrc} alt={`${wine.type} image`} />
              <Card.Body>
                <Card.Title className="fw-bold text-center">{wine.type}</Card.Title>
                <Card.Text className="text-muted text-center">
                  Enjoy our premium {wine.type} selection.
                </Card.Text>
                <Button variant="primary" className="w-100 wine-btn">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeaturedWines;
