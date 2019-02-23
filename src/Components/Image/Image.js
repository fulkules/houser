import React, { Component } from 'react';
import axios from 'axios';


class Image extends Component{
    constructor(){
        super()

        this.state = {
            imgUrl: ``
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input id="imgUrl" onChange={ this.handleInput } value={this.state.imgURl} placeholder="Image URL"/>
            </div>
        )
    }
    
}

export default Image;