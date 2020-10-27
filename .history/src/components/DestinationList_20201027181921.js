import React from 'react'


const DestinationList = (props) => {

    return (
    <div>
        {props.destinationList.map(dest => <li key={dest.id}>{dest.name} - {dest.city} - {dest.state} - {dest.comment}</li>)}
   </div>
    )}


    export default DestinationList