import React from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';


const mainPage = () => {
	return (
		<Jumbotron>
			<h1>Cat Gif Page</h1>
			<p>Having a bad day?</p>
			<p>Need a break?</p>
			<p>Love Cats?</p>
			<Link className="btn btn-primary btn-lg" to="/cats">Click Here to get your dose of Cats!</Link> 
		</Jumbotron>
		);
}

export default mainPage;