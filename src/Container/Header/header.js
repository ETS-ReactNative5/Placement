import React, { Component } from "react";
import UserDrawer from '../User Home/userDrawer'
import { connect } from "react-redux";


class Header extends Component {

  btn_click = (e) => {
    e.preventDefault();
    this.props.action.auth.Logout()
  }
  render() {
    console.log("header ke propr",this.props)
    return (
      (this.props.token && this.props.role==="user") ?
        <UserDrawer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)