import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateStep1 } from '../../ducks/reducer';


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
        // console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        // console.log(this.props)
        const {updateStep1} = this.props;
        return(
            <div>
                <input 
                    id="name" 
                    onChange={ this.handleInput } 
                    value={this.state.name} placeholder="name"
                />
                <input 
                    id="address" 
                    onChange={ this.handleInput } 
                    value={this.state.address} 
                    placeholder="address"
                />
                <input 
                    id="city" 
                    onChange={ this.handleInput } 
                    value={this.state.city} 
                    placeholder="city"
                />
                <input 
                    id="state" 
                    onChange={ this.handleInput } 
                    value={this.state.state} 
                    placeholder="state"
                />
                <input 
                    id="zipcode" 
                    onChange={ this.handleInput } 
                    value={this.state.zipcode} 
                    placeholder="zipcode"
                />
                <Link to="/wizard/step2">
                    <button onClick={ () => {
                        updateStep1(this.state)
                        } }>Save Changes
                    </button>
                </Link>

                <Link to="/wizard/step2"><button>Next</button></Link>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address:state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, { updateStep1 } )(NewListing);