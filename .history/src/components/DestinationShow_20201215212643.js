import React from 'react'



const DestinationShow = (props) => {


    // debugger
        let destination = props.destinations
        debugger

    return (
         <div>
            {destination ? destination.name : null} - 
            {destination ? destination.city : null} - 
            {destination ? destination.state : null} - 
            {destination ? destination.comment: null} -
            {destination ? destination.travel_time : null }
        </div>
    )
}

export default DestinationShow