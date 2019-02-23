import React from 'react';

export default function House(props){
    return(
        <div>
            <h1>House</h1>
            
            <button onClick={ () => props.deleteHome(props.house.id)}>Delete</button>
        </div>
    )
}