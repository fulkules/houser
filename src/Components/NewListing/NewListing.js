import React, { Component } from 'react';


class NewListing extends Component{
    constructor(){
        super()

        this.state = {
            name: ``,
            address: ``,
            city: ``,
            state: ``,
            zipcode: ``
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
                <input id="name" onChange={ this.handleInput } value={this.state.name} placeholder="name"/>
                <input id="address" onChange={ this.handleInput } value={this.state.address} placeholder="address"/>
                <input id="city" onChange={ this.handleInput } value={this.state.city} placeholder="city"/>
                <input id="state" onChange={ this.handleInput } value={this.state.state} placeholder="state"/>
                <input id="zipcode" onChange={ this.handleInput } value={this.state.zipcode} placeholder="zipcode"/>
            </div>
        )
    }
    
}

export default NewListing;