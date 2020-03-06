import React, { Component } from 'react'

class ChagnePage extends Component {
    componentWillMount(props){
        
               this.props.history.push("/HomeUser")
              this.props.history.push("/Notification")
                
          
         
    }
    render() {
        return (
            <div>
          
            </div>
        )
    }
}
export default ChagnePage