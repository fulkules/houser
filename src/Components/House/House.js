import React from 'react';
import './House.css';
import { Z_BLOCK } from 'zlib';

export default function House(props){
    // console.log(11111111, props)
    return(
        <div className="House" style={{display: 'flex', width: '100%', justifyContent: 'space-evenly', padding: '10px'}}>
            <div className="mainImg" style={{display: 'block'}}>
                <img src={props.house.image} alt={props.house.name} height="100px" width="150px" />
                <button onClick={ () => props.deleteHome(props.house.id)} style={{height: '20px'}} >Delete</button>
            </div>

            <div className="mainInfo">
                <h3>Name: {props.house.name}</h3>
                <h5>Address: {props.house.address}</h5>
            </div>
            <div className="city">
                <h5>City: {props.house.city}</h5>
                <h5>State: {props.house.state}</h5>
                <h5>Zip Code: {props.house.zipcode}</h5>
            </div>
            <div className="rent">
                <h5>Mortgage payment: ${props.house.monthly_mortgage_amount}</h5>
                <h5>Desired Rent: ${props.house.desired_rent}</h5>
            </div>
            
            

            <br /><br /><br />
        </div>
    )
}