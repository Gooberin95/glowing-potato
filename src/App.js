import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
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
		   	<Image src={profilePic} height="450" rounded />
		          </div>
		          <div className="right">
		            <h1>Welcome to My Website</h1>
		            <p>This is a simple example of a split-layout React website.</p>
		            <p>Add your content here.</p>
		  	<img src={photoFour} width="100%" height="650px"/>
		          </div>
		        </div>
		      </div>
		    );
};

const Navbar = () => {
	  return (
		      <Nav className="justify-content-center" activeKey="/home" style={{backgroundColor: "black"}}>
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

