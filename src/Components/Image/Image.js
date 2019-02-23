import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { updateStep2 } from '../../ducks/reducer';


class Image extends Component{
    constructor(){
        super()

        this.state = {
            imgUrl: ``
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        const {updateStep2} = this.props
        return(
            <div>
                <input id="imgUrl" onChange={ this.handleInput } value={this.state.imgURl} placeholder="Image URL"/>
                <Link to="/wizard/step3"><button  onClick={
                        () => updateStep2(this.state)  }>Next</button></Link>
                <Link to="/wizard/step1"><button  onClick={
                        () => updateStep2(this.state)  }>Back</button></Link>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        imgUrl: state.imgUrl
    }
}

export default connect(mapStateToProps, { updateStep2 } )(Image);