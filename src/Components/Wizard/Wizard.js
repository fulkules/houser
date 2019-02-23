import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: ``,
            address: ``,
            city: ``,
            state: ``,
            zipcode: ``
        }
        // this.handleClick = this.handleClick.bind(this)
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }



    // handleClick(e){
    //     this.props.history.push('/');
    // }

    handleComplete(e){
        const { name, address, city, state, zipcode} = this.state;
        axios.post('/api/list', {
            name: name, 
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }).then(res => {
            console.log(res)
            this.setState({ 
                home: res.data
            })
            this.props.history.push('/');
        })
    }

    render(){
        return(
        <div>
            <h1>Wizard</h1>
            <input id="name" onChange={ this.handleInput } value={this.state.name} placeholder="name"/>
            <input id="address" onChange={ this.handleInput } value={this.state.address} placeholder="address"/>
            <input id="city" onChange={ this.handleInput } value={this.state.city} placeholder="city"/>
            <input id="state" onChange={ this.handleInput } value={this.state.state} placeholder="state"/>
            <input id="zipcode" onChange={ this.handleInput } value={this.state.zipcode} placeholder="zipcode"/>
            <button onClick={ e => this.handleComplete(e.target.value) }>Complete</button>
            <Link to="/"><button>Cancel</button></Link>
        </div>
        )
    }
}

export default Wizard;