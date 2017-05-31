import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGif, selectGif} from '../actions';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';

class GifShow extends Component {

    
    componentDidMount(){
		this.props.fetchGif();
    }

    loadNewGif = () => {
    	let {availableGifs, selectGif} = this.props;
		selectGif(availableGifs);
	};
    
    render(){
		let {selectedGif} = this.props;

		return (
			<div className="gifContainer">
				<Link to="/" className="btn btn-danger">Back to Index</Link>
				<div>
					{selectedGif ?
                        <img src={selectedGif.images.original.url} className="gifSelected" /> : null
					}
	        	</div>
		        <button className="btn btn-primary" onClick={this.loadNewGif}> Click to See More!</button>
		    </div>

		);
    }
    
}
function mapStateToProps(state){
    return {
 		selectedGif: state.gif.selectedGif,
		availableGifs: state.gif.availableGifs
    }
}


export default connect(mapStateToProps, {fetchGif, selectGif}) (GifShow);