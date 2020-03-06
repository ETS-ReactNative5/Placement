import React, { Component } from 'react'
import axios from 'axios'


class ChagnePage extends Component {
    componentWillMount(props){
        axios.post("http://localhost:3010/ApproveStudentList")
            .then((res)=>{
                localStorage.setItem("ApproveStudent",JSON.stringify(res.data))
                console.log(res)
             this.props.history.push("/ApproveStudent")
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