import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houseList: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios.get('/api/list').then(res => {
            console.log('incoming')
            this.setState({ houseList: res.data })
        })
    }

    handleClick(e){
        this.props.history.push('/wizard');
    }

    render(){
        const mappedList = this.state.houseList.map( house => {
            return(
                <House key={house.id} /> 
            )
        })
        return(
            <div>
                { mappedList }
                <button onClick={ (e) => this.handleClick(e.target.value) }>Add New Property</button>
            </div>
        )
    }
}

export default Dashboard;