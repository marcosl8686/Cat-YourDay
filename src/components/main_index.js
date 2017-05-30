import React from 'react';
import {Link} from 'react-router-dom';


const mainPage = () => {
	return (
		<div className="jumbotron">
			<h1>Here's your dose of Cats!</h1>
			<p>hajsdjasdlasjfkladkajdkasjdlasdas</p>
			<Link className="btn btn-primary btn-lg" to="/cats">Click Here</Link> 
		</div>
		);
}

export default mainPage;