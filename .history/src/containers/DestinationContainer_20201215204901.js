import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationEdit from '../components/DestinationEdit'
import DestinationInput from '../components/DestinationInput'
import DestinationList from '../components/DestinationList'
import DestinationShow from '../components/DestinationShow'
import {
    Switch,
    Route,
  } from "react-router-dom";

class DestinationContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }  

    render(){        
        return (
          <div>  
            <Switch>
            <Route path ='/destinations/new' component={DestinationInput}/>
            <DestinationList  destinations={this.props.destinations}/>
            <DestinationShow destinations={this.props.destinations}/>
            <DestinationEdit destinations={this.props.destinations}/>  
            </Switch>         
          </div>
        )
            
         }
      }
const mapStateToProps = state => {
    return {
        destinations: state.destinations
    } 
}


export default connect(mapStateToProps, {fetchDestinations})(DestinationContainer);