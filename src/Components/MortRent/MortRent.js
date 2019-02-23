import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateStep3 } from '../../ducks/reducer';
import store from '../../ducks/store'



class MortRent extends Component{
    constructor(){
        super()

        this.state = {
            name:'',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            imgUrl: '',
            mtgAmt: '',
            rent:''

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleComplete = this.handleComplete.bind(this)
    }

componentDidMount() {
    console.log(this.props)
this.setState({
    name:this.props.name,
    address:this.props.address,
    city:this.props.city,
    state:this.props.state,
    zipcode: this.props.zipcode,
    imgUrl: this.props.imgUrl,
    mtgAmt: this.props.mtgAmt,
    rent: this.props.rent
})

}


    handleInput(e){
        console.log(this.state)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleComplete(){
        const {updateStep3} = this.props
        // console.log(this.state)
        updateStep3(this.state)
        const { name, address, city, state, zipcode, imgUrl, mtgAmt, rent } = this.state;
        axios.post('/api/list', {
            name,
            address,
            city,
            state,
            zipcode,
            imgUrl,
            mtgAmt,
            rent
        }).then(res => {
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
                <button onClick={this.handleComplete}>Complete</button>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
        imgUrl: state.imgUrl,
        mtgAmt: state.mtgAmt,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { updateStep3 } )(MortRent);