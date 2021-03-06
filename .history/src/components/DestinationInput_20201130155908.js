import React from 'react'
import {connect} from 'react-redux'
import {addDestination} from '../actions/addDestination'

class DestinationInput extends React.Component {

    state = {
        name: '',
        city: '',
        state: '',
        comment: '',
        travel_time: ''
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
       this.props.addDestination(this.state, this.props.history)    
       this.setState({
        name: '', 
        city: '', 
        state: '', 
        comment: '',
        travel_time: ''
       })    
    }

    render() {
        return (
            <div className="destinationInput">
                <form onSubmit={this.handleSubmit}> 
                <label>Destination Name: </label>
                <input type="text" placeholder="Destination Name: " value={this.state.name} name="name" onChange={this.handleChange}></input><br></br><br></br>
                <label>City: </label>   
                <input type="text" placeholder="City:" value={this.state.city} name="city" onChange={this.handleChange}></input><br></br><br></br>
                <label>State: </label>   
                <input type="text" placeholder="State: " value={this.state.state} name="state" onChange={this.handleChange}></input><br></br><br></br>
                <label>Travel Time:</label>
                <input type="number" placeholder="TraveTime: " value={this.state.travel_time} name="travel_time" onChange={this.handleChange}></input><br></br><br></br>
                <label>Comment: </label>   
                <textarea  type="text" placeholder="Comment: " value={this.state.comment} name="comment"  onChange={this.handleChange}><br></br>
                </textarea>
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDestination})(DestinationInput)