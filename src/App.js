import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




function App() {
  return (
	  <Card style={{width: '20rem'}}>
	  	<Card.Img variant="top" src=""/>
	  	<Card.Body>
	  		<Card.Title>
	  Gym Barbell
	  		</Card.Title>
	  <Card.Text>
	  Testing and then more testing and after that, probably might do some testing
	  </Card.Text>
	  <Button variant="primary">Testing</Button>
	  	</Card.Body>
	  </Card>
  );
}

export default App;
