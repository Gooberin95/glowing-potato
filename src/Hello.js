import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sheep from './sheep.jpg';

function Hello() {
	  return (
		      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
		        <Card style={{ width: '40rem' }}>
		          <Card.Img variant="top" src={sheep} />
		          <Card.Body>
		            <Card.Title>Hello Mavis! Thank you for waiting and being patient!</Card.Title>
		          </Card.Body>
		        </Card>
		      </div>
		    );
}

export default Hello;

