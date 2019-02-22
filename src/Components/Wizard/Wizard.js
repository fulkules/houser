import React, { Component } from 'react';

class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: ``,
            address: ``,
            city: ``,
            state: ``,
            zipcode: ``
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClick(e){
        this.props.history.push('/');
    }

    render(){
        return(
        <div>
            <h1>Wizard</h1>
            <input onChange={ this.handleInput } value={this.state.name} placeholder="name"/>
            <input onChange={ this.handleInput } value={this.state.address} placeholder="address"/>
            <input onChange={ this.handleInput } value={this.state.city} placeholder="city"/>
            <input onChange={ this.handleInput } value={this.state.state} placeholder="state"/>
            <input onChange={ this.handleInput } value={this.state.zipcode} placeholder="zipcode"/>
            <button onClick={ e => this.handleClick(e.target.value) }>Cancel</button>
        </div>
        )
    }
}

export default Wizard;