import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import mavisOne from './mavisOne.jpg';
import { Link, Element } from 'react-scroll';

function Hello() {
	  const cardArray = Array.from({ length: 18 }, (_, index) => ({
		      id: index + 1,
		      title: `Card ${index + 1}`,
		      content: 'This is a test',
		    }));

	  return (
		      <div>
		        {/* Navbar with scroll links */}
		        <Nav>
		          {cardArray.map((card) => (
				            <Nav.Link key={card.id} to={`card-${card.id}`} smooth={true} duration={500}>
				              {card.title}
				            </Nav.Link>
				          ))}
		        </Nav>

		        <div>
		          {cardArray.map((card) => (
				            <Element key={card.id} name={`card-${card.id}`}>
				              <Card style={{ width: '18rem', margin: '10px' }}>
				                <Card.Img variant="top" src={mavisOne} alt={`Image for ${card.title}`} />
				                <Card.Body>
				                  <Card.Title>{card.title}</Card.Title>
				                  <Card.Text>{card.content}</Card.Text>
				                  <Button variant="primary">Go somewhere</Button>
				                </Card.Body>
				              </Card>
				            </Element>
				          ))}
		        </div>
		      </div>
		    );
}

export default Hello;

