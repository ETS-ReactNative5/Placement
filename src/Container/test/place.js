import React, { Component } from 'react'
import axios from 'axios'


class ChagnePage extends Component {
    componentWillMount(props){
         axios.post("http://localhost:3010/PlacedStudentList")
            .then((res) => {
                localStorage.setItem("PlacedStudent", JSON.stringify(res.data))
                console.log(res)
               this.props.history.push("/PlacedStudent")
                
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