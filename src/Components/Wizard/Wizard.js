import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NewListing from '../NewListing/NewListing';
import Image from '../Image/Image';
import MortRent from '../MortRent/MortRent';
import {connect} from 'react-redux';
import {cancel} from '../../ducks/reducer';
import './Wizard.css';

class Wizard extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
            
    //     }
    // }
    

    render(){
        const {cancel} = this.props;
        return(
        <div className="Wizard">
            <h1>Wizard</h1>
            <Switch>
                <Route component={ NewListing } path="/wizard/step1" />
                <Route component={ Image } path="/wizard/step2" />
                <Route component={ MortRent } path="/wizard/step3" />
            </Switch>
            <Link to="/"><button onClick={cancel}>Cancel</button></Link>
        </div>
        )
    }
}

export default connect(() => {return {}}, {cancel})(Wizard);