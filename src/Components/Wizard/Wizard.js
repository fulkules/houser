import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NewListing from '../NewListing/NewListing';
import Image from '../Image/Image';
import MortRent from '../MortRent/MortRent';

class Wizard extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    



    // handleClick(){

    // }

    

    render(){
        return(
        <div>
            <h1>Wizard</h1>
            <Switch>
                <Route component={ NewListing } path="/wizard/step1" />
                <Route component={ Image } path="/wizard/step2" />
                <Route component={ MortRent } path="/wizard/step3" />
            </Switch>
            <Link to="/wizard/step1"><button>Next</button></Link>
            <Link to="/"><button>Cancel</button></Link>
        </div>
        )
    }
}

export default Wizard;