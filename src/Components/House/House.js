import React from 'react';

export default function House(props){
    return(
        <div>
            <h3>{props.house.name}</h3>
            <h5>{props.house.address}</h5>
            <h5>{props.house.city}</h5>
            <h5>{props.house.state}</h5>
            <h5>{props.house.zipcode}</h5>
            <h5>{props.house.image}</h5>
            <h5>{props.house.monthly_mortgage_amount}</h5>
            <h5>{props.house.desired_rent}</h5>
            <img alt={props.house.name} height="80px" width="120px" />

            
            
            <button onClick={ () => props.deleteHome(props.house.id)}>Delete</button>
        </div>
    )
}