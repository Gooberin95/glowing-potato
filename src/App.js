import React from 'react';
import './App.css';

const App = () => {
	  return (
		      <div className="app">
		        <Navbar />
		        <div className="split-layout">
		          <div className="left">
		            <img src="your_photo.jpg" alt="Your Photo" />
		          </div>
		          <div className="right">
		            <h1>Welcome to My Website</h1>
		            <p>This is a simple example of a split-layout React website.</p>
		            <p>Add your content here.</p>
		          </div>
		        </div>
		      </div>
		    );
};

const Navbar = () => {
	  return (
		      <nav className="navbar">
		        <ul>
		          <li>Home</li>
		          <li>About</li>
		          <li>Contact</li>
		        </ul>
		      </nav>
		    );
};

export default App;
