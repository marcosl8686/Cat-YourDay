import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGif} from '../actions';
import {Link} from 'react-router-dom';

class GifShow extends Component {

    
    componentDidMount(){
	this.props.fetchGif();
    }

    
    render(){
	
		return (
			<div>		
				<div className="row">
					<div className="container">
						GIF should be here
		        	</div>
		        </div>
		        <button className="btn btn-primary"> Next</button>
		    </div>
		);
    }
    
}
function mapStateToProps(state){
    return {
 	gifs:state.gifs	
    }	
}


export default connect(mapStateToProps, {fetchGif}) (GifShow);