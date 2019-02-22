import React, { Component } from 'react';
import axios from 'axios';

class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            home: {},
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

    // handleComplete(e){
    //     const {name, address, city, state, zipcode} = this.state;
    //     axios.post('/api/list', {
    //         name: name, 
    //         address: address,
    //         city: city,
    //         state: state,
    //         zipcode: zipcode
    //     }).then(res => {
    //         this.setState({ 

    //         })
    //     })
    // }

    render(){
        return(
        <div>
            <h1>Wizard</h1>
            <input onChange={ this.handleInput } value={this.state.name} placeholder="name"/>
            <input onChange={ this.handleInput } value={this.state.address} placeholder="address"/>
            <input onChange={ this.handleInput } value={this.state.city} placeholder="city"/>
            <input onChange={ this.handleInput } value={this.state.state} placeholder="state"/>
            <input onChange={ this.handleInput } value={this.state.zipcode} placeholder="zipcode"/>
            <button onClick={ e => this.handleComplete(e.target.value) }>Complete</button>
            <button onClick={ e => this.handleCancel(e.target.value) }>Cancel</button>
        </div>
        )
    }
}

export default Wizard;