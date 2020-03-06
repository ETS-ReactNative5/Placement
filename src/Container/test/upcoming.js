import React, { Component } from 'react'
import axios from 'axios'


class ChagnePage extends Component {
    componentWillMount(props){
        axios.post("http://localhost:3010/DriveData")
        .then((res) => {
            localStorage.setItem("DriveDetail", JSON.stringify(res.data))
            console.log(res)
            this.props.history.push("/DriveDetail")
        
            })
         
    }
    render() {
        return (
            <div>
          
            </div>
        )
    }
}
export default ChagnePage