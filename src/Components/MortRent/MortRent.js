import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';



class MortRent extends Component{
    constructor(){
        super()

        this.state = {
            mtgAmt: ``,
            rent: ``
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleComplete(e){
        const { mtgAmt, rent } = this.state;
        axios.post('/api/list', {
            mtgAmt: mtgAmt,
            rent: rent
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
                <input id="mtgAmt" onChange={ this.handleInput } value={this.state.mtgAmt} placeholder="Mortgage Amount"/>
                <input id="rent" onChange={ this.handleInput } value={this.state.rent} placeholder="Desired Rent"/>                
                <button onClick={ e => this.handleComplete(e.target.value) }>Complete</button>
            </div>
        )
    }
    
}

export default MortRent;