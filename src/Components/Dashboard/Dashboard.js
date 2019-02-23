import React, { Component } from 'react';
import House from '../House/House';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            houseList: []
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    getHomes = () => {
        axios.get('/api/list').then(res => {
            this.setState({ houseList: res.data })
        })
    }

    componentDidMount(){
        this.getHomes()
    }

    deleteHome = (id) => {
        axios.delete(`/api/list/${id}`).then(res => {
            return this.getHomes();
        })
    }
    // handleClick(e){
    //     this.props.history.push('/wizard');
    // }

    render(){
        const mappedList = this.state.houseList.map( house => {
            return(
                 
                <div key={house.id}> 
                   <House 
                        house={house}
                        deleteHome={this.deleteHome}
                    /> 
                </div>
            )
        })
        return(
            <div>
                { mappedList }
                <Link to="/wizard"><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard;