import React, { forwardRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const WineList = forwardRef(({ addToCart }, ref) => {
  const wines = [
    { name: 'Merlot', imgSrc: 'https://images.pexels.com/photos/25858427/pexels-photo-25858427/free-photo-of-red-wine-bottle-at-winery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Chardonnay', imgSrc: 'https://images.pexels.com/photos/10822127/pexels-photo-10822127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Cabernet', imgSrc: 'https://images.pexels.com/photos/18723005/pexels-photo-18723005/free-photo-of-bottle-of-wine-on-a-sheet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sauvignon Blanc', imgSrc: 'https://images.pexels.com/photos/3933170/pexels-photo-3933170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="my-5" ref={ref}>
      <h2 className="text-center mb-4 text-primary">Our Wines</h2>
      <Row>
        {wines.map((wine, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="wine-card shadow-lg">
              <Card.Img variant="top" src={wine.imgSrc} alt={`${wine.name} image`} />
              <Card.Body>
                <Card.Title className="fw-bold text-center">{wine.name}</Card.Title>
                <Card.Text className="text-muted text-center">Rich, flavorful, and a must-try!</Card.Text>
                <Button variant="outline-primary" className="w-100 wine-btn" onClick={() => addToCart(wine.name)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default WineList;
