import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Validation from 'simple-react-validator'
import BI from '../../Image/background.jpg'
import LoginIcon from '../../Image/login-icon.jpg'
import * as LoginAction from '../../Action/Action.js'
import { bindActionCreators } from 'redux';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import axios from "axios"

import { connect } from 'react-redux'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    backgroundImage: `url(${BI})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  paper: {
    padding: theme.spacing(3),
    // textAlign: 'center',
    background: 'transparent',
    opacity: '100%',
    width: theme.spacing(50)
  },
  Grid1: {
    textAlign: 'center',


  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: null
    }
    this.Validator = new Validation();
    this.redirect = this.redirect.bind(this);
    this.Submit = this.Submit.bind(this);
    this.Change = this.Change.bind(this);
  }
  Submit = (event) => {
    event.preventDefault();
    if (this.Validator.allValid()) {
    console.log("state of login",this.state)
    axios.post("http://localhost:3010/verify", this.state)
    .then((res)=>{ 
      console.log("api ka response",res)
      if(!(res.data.result))
     alert("invalid Details")
    
      if(res.data.result.Name){
      alert("Logging In")
     this.props.action.auth.Login(this.state)
        }
      
      })
        // this.props.action.auth.Login(this.state)
        //   .then(res => {
          
        //     console.log("response",this.props.response.datas)
        //     if(this.props.response.token)
        //    alert("LOGGED IN")
        //     else
        //     alert("inavlid details")

        //   })
        //   .catch(e => { throw e })
    }
    else {
      this.Validator.showMessages()
      this.forceUpdate();

    }

  }
  redirect = () => {

    this.props.history.push("/SignUp")
  }

  redirectToHome = () => {

    this.props.history.push("/Home")
  }

  Change = (event) => {
    event.preventDefault(); 
    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
          className={classes.Grid1}
          item xs={6}>
          <Paper elevation={0} className={classes.paper}>
          <Typography  style={{ fontStyle:"oblique",fontSize: 35,display:"inline-flex" }}> Login &nbsp; <Avatar src={LoginIcon} /></Typography>
         

           

            <hr />
            <TextField
              style={{ padding: 8, width: 250 }}
              id="outlined-password-input"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                   <AccountBoxIcon/>
                  </InputAdornment>
                )
              }}
              label="Enter Email"
              type="email"
              variant="outlined"
              name="email"
             
              onChange={this.Change}
              onBlur={() => this.Validator.showMessageFor('email')}
            />
            {this.Validator.message('email', this.state.email, 'required|email')}

            <TextField
              style={{ padding: 8, width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                   <LockIcon />
                  </InputAdornment>
                )
              }}
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              onChange={this.Change}
              onBlur={() => this.Validator.showMessageFor('password')}

            /><br />
            {this.Validator.message('password', this.state.password, 'required')}
            <br />
            <Button variant="contained" size="large"
              onClick={this.Submit}
              block color="primary">
              Log In
      </Button>
      <hr />
      <Typography  variant="subtitle" style={{display:"inline-flex" }}>
                New user <a href="" onClick={this.redirect} >SignUp <LockOpenIcon  /></a>
              </Typography>


          </Paper>
        </Grid>



      </Grid>



    )
  }



}
const mapStateToprops = (state) => {
  const response = state
  return {
    response: response
  }
}
const mapDispatchToProps = dispatch => ({
  action: {
    auth: bindActionCreators(LoginAction, dispatch)
  }
})
export default connect(mapStateToprops, mapDispatchToProps)(withStyles(useStyles)(LoginForm));