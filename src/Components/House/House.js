import React from 'react';
import './House.css';

export default function House(props){
    return(
        <div className="House">
            <img src="{props.house.image}" alt={props.house.name} height="80px" width="120px" />
            <h3>Name: {props.house.name}</h3>
            <h5>Address: {props.house.address}</h5>
            <h5>City: {props.house.city}</h5>
            <h5>State: {props.house.state}</h5>
            <h5>Zip Code: {props.house.zipcode}</h5>
            <h5>Mortgage payment: ${props.house.monthly_mortgage_amount}</h5>
            <h5>Desired Rent: ${props.house.desired_rent}</h5>
            
            <button onClick={ () => props.deleteHome(props.house.id)}>Delete</button>

            <br /><br /><br />
        </div>
    )
}