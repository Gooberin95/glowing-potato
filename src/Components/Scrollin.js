import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './your-scroll.module.css'; // You can import your CSS styles here

function Scrollin() {
	  return (
		      <>
		        <Container fluid className={styles.parallax}>
		          {/* Replace 'img_parallax.jpg' with the actual path to your image */}
		          {/* Add an image element if you want to display an image */}
		        </Container>

		        <Container fluid style={{ height: "1000px", backgroundColor: "red", fontSize: "36px", textAlign: "center" }}>
		          Scroll Up and Down this page to see the parallax scrolling effect.
		          This container is just here to enable scrolling.
		          Tip: Try to remove the background-attachment property to remove the scrolling effect.
		        </Container>

		        <Container fluid className={styles.parallax}>
		          {/* Replace 'img_parallax.jpg' with the actual path to your image */}
		          {/* Add another image element if you want to display another image */}
		        </Container>
		      </>
		    );
}

export default Scrollin;

