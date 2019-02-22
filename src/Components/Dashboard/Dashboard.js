import React, { Component } from 'react';
import House from '../House/House'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houseList: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.history.push('/wizard');
    }

    render(){
        let mappedList = this.state.houseList.map( house => <House /> )
        return(
            <div>
                { mappedList }
                <button onClick={ (e) => this.handleClick(e.target.value) }>Add New Property</button>
            </div>
        )
    }
}

export default Dashboard;