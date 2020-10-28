import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationInput from '../components/DestinationInput'

class DestinationContainer extends React.Component {

render(){
    return(
        <div>
            <DestinationInput destinations={this.props.destinations}/>


        </div>
    )
}

}







export default connect(mapStateToProps, {fetchDestinations})(DestinationContainer);