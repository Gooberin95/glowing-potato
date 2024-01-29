import Card from 'react-bootstrap/Card';
import mavisOne from './mavisOne.jpg';
import Button from 'react-bootstrap/Button';

function Hello() {
	const cardArray = [
		{id: 1, title: "Card One", content: "This is a test" },
		{id: 2, title: "Card Two", content: "this is a test" },
		{id: 3, title: "Card One", content: "This is a test" },
		{id: 4, title: "Card Two", content: "this is a test" },
		{id: 5, title: "Card One", content: "This is a test" },
		{id: 6, title: "Card Two", content: "this is a test" },
		{id: 7, title: "Card One", content: "This is a test" },
		{id: 8, title: "Card Two", content: "this is a test" },
		{id: 9, title: "Card One", content: "This is a test" },
		{id: 10, title: "Card Two", content: "this is a test" },
		{id: 11, title: "Card One", content: "This is a test" },
		{id: 12, title: "Card Two", content: "this is a test" },
		{id: 13, title: "Card One", content: "This is a test" },
		{id: 14, title: "Card Two", content: "this is a test" },
		{id: 15, title: "Card One", content: "This is a test" },
		{id: 16, title: "Card Two", content: "this is a test" },
		{id: 17, title: "Card One", content: "This is a test" },
		{id: 18, title: "Card Two", content: "this is a test" },
	];

	  return (
		  <div>

			         {cardArray.map((card) => (
					         <Card key={card.id} style={{ width: '18rem', margin: '10px' }}>
					           <Card.Img variant="top" src={mavisOne} alt={`Image for ${card.title}`} />
					           <Card.Body>
					             <Card.Title>{card.title}</Card.Title>
					             <Card.Text>{card.content}</Card.Text>
					             <Button variant="primary">Go somewhere</Button>
					           </Card.Body>
					         </Card>
					       ))}
			       </div>
			     );
		   }

export default Hello;



