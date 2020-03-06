import React, { Component } from "react";
import { connect } from "react-redux";
import Home from '../Home/Home'


class Header2 extends Component {

  btn_click = (e) => {
    e.preventDefault();
    this.props.action.auth.Logout()
  }
  render() {
    console.log("header2 ke propr",this.props)
    return (
      (this.props.token && this.props.role==="admin") ?
        <Home/>
        :null
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  const  token  =state.token;
  const role = state.role;
  const name=state.Name;
  return {
          token: token,
          role:role,
          name:name
  }
}

const mapDispatchToProps= ()=>({
  actions:{
      

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header2)