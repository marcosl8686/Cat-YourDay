import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGif, selectGif} from '../actions';
import {Link} from 'react-router-dom';

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
			<div>		
				<div className="row">
					<div className="container">
						{selectedGif ?
                            <img src={selectedGif.images.original.url}/> : null
						}

		        	</div>
		        </div>
		        <button className="btn btn-primary" onClick={this.loadNewGif}> Next</button>
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