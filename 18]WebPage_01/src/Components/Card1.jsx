import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Com1 from '/com-1.jpg'
import Com2 from '/com-2.jpg'
import Com3 from '/com-3.jpg'


export default function Card1() {
  return (
    <>
       <div className="d-flex flex-wrap justify-content-center">
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={Com1} />
        <Card.Body>
          <Card.Title>Card Title 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={Com2} />
        <Card.Body>
          <Card.Title>Card Title 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={Com3} />
        <Card.Body>
          <Card.Title>Card Title 3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
