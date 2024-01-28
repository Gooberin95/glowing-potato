import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState, useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import { Nav } from 'react-bootstrap';
import photo from './mavisOne.jpg';
import photoFour from './mavisFour.jpg';
import profilePic from './profilePic.jpg';
import './App.css';

const App = () => {
	


	  return (
		      <div className="app">
		        <Navbar />
		        <div className="split-layout">
		          <div className="left" style={{borderRight: "solid 8px", borderRadius: "4px"}}>



			<Figure>
		        <Figure.Image
		          width={571}
		          height={650}
		          alt="171x180"
		          src={profilePic}
		  	style={{border: "solid white", borderRadius: "9px"}}
		        />
		        <Figure.Caption>

					<p style={{fontSize: "20px"}}> Hello, I'm Mavis Simpson, a passionate Event Planner and Fashion Consultant dedicated to bringing creativity and elegance to every occasion. With a keen eye for detail and a flair for fashion, I specialize in curating memorable events that reflect the unique style and preferences of my clients. From meticulously planned gatherings to personalized fashion consultations, I thrive on turning visions into reality. Let's collaborate to create experiences and styles that leave lasting impressions</p>
				</Figure.Caption>
			      </Figure>


				  </div>
		  <div className="right" style={{ height: "100%", overflowY: "scroll", background: "linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)" }}>
		    <div style={{ background: "white" }}>
		      <h1>Welcome to My Website</h1>
		      <p>This is a simple example of a split-layout React website.</p>
		      <p>Add your content here.</p>
		    </div>
		  </div>
		  
				</div>
			      </div>
			    );
	};

	const Navbar = () => {
	  return (
		      <Nav className="justify-content-center" activeKey="/home" style={{backgroundColor: "white"}}>
		          <Nav.Item>
		            <Nav.Link href="/home">Active</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link eventKey="link-1">Link</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link eventKey="link-2">Link</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link eventKey="disabled" disabled>
		              Disabled
		            </Nav.Link>
		          </Nav.Item>
		        </Nav>
		    );
};

export default App;

