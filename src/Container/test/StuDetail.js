import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import { Grid, Typography } from '@material-ui/core';
import BI from '../../Image/bg1.jpg'
import Zoom from '@material-ui/core/Zoom';



const styles = theme => ({

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: 240,
    fontSize: 20
  },

})


class Layout extends Component {
  constructor() {

    super()
    this.state = {
      Branch: "",
      SSC: 0,
      HSC: 0,
      Btech: 0,
      Year: "",
      Backlogs: 0,
      Gender: "",


    }
  }

  // componentDidMount(){
  //   window.location.reload(true)

  // }

  myChangeHandler = (event) => {
    if (event.target.name === "SSC" || event.target.name === "HSC" || event.target.name === "Btech" || event.target.name === "Backlogs") {
      if (event.target.value === "") {
        event.target.value = 0;
      }
    }

    this.setState({ [event.target.name]: event.target.value })

    console.log(this.state);
    console.log(event.target.value)


  }
  

  mySubmitHandler = (event) => {
    //var submit=0;
    //submit++;


    event.preventDefault();
    console.log("submitt")
    console.log(this.state)


    // this.props.action.auth.ViewStudent(this.state)
    axios.post("http://localhost:3010/StudentDetail", this.state)
      .then((response) => {
        console.log("response", response.data)
        localStorage.setItem("studentDetail", JSON.stringify(response.data))
        this.props.history.push("/ViewStudent");

      }).catch(er => {
        console.log(er);
        // alert(er)
      })
  }

  render() {


    return (
      // <main className={classes.content}>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        style={{
          backgroundImage: `url(${BI})`,
          backgroundRepeat: "no-repeat",
          paddingLeft: 20,
          backgroundSize: "cover",
          height: "100vh",
         
        }}


      >
        <Zoom in timeout={2000}>
          <form >
            <br></br>
            <br></br>
            <Typography variant="h6" className="text-center">
              SELECT THE REQUIREMENTS :
          </Typography>
            <br></br>
            <Grid container style={{ marginTop: 30 }}
              direction="row"
              justify="center"
              alignItems="flex-end">

              <TextField
                style={{ padding: 10, width: 363 }}
                id="outlined-select-currency-native"
                select
                label="BRANCH"
                name="Branch"
                SelectProps={{
                  native: true
                }}
                variant="outlined"
                onClick={this.myChangeHandler}>
                <option></option>
                <option value="CSE">CSE</option>
                <option value="ME">ME</option>
                <option value="CE">CE</option>
                <option value="EE">EE</option>
                <option value="ECE">ECE</option>
                <option value="AE">AE</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>

              </TextField>

              <TextField
                style={{ padding: 10, width: 363 }}
                label="SSC PERCENTAGE"
                type="number"
                name="SSC"
                placeholder="ABOVE THEN"
                variant="outlined"
                onChange={this.myChangeHandler}
              />
            </Grid>
            <Grid container style={{ marginTop: 30 }}
              direction="row"
              justify="center"
              alignItems="flex-end">
              <TextField
                style={{ padding: 10, width: 363 }}
                label="HSC PERCENTAGE"
                type="number"
                name="HSC"
                placeholder="ABOVE THEN"
                variant="outlined"
                onChange={this.myChangeHandler}
              />

              <TextField
                style={{ padding: 10, width: 363 }}
                label="Btech"
                type="number"
                name="Btech"
                placeholder="ABOVE THEN"
                variant="outlined"
                onChange={this.myChangeHandler}
              />
            </Grid>


            <Grid container style={{ marginTop: 30 }}
              direction="row"
              justify="center"
              alignItems="flex-end">
              <TextField
                style={{ padding: 10, width: 363 }}
                id="outlined-select-currency-native"
                select
                label="YEAR OF ADDMISSION"
                name="Year"
                SelectProps={{
                  native: true
                }}
                variant="outlined"
                onClick={this.myChangeHandler}
              >
                <option></option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>

              </TextField>
            </Grid>
            <Grid container style={{ marginTop: 30 }}
              direction="row"
              justify="center"
              alignItems="flex-end">
              <TextField
                style={{ padding: 10, width: 180 }}
                id="outlined-select-currency-native"
                select
                name="Backlogs"
                label="NO OF BACKLOGS"
                SelectProps={{
                  native: true
                }}
                variant="outlined"
                onClick={this.myChangeHandler}
              >
                <option></option>
                <option value="">ANY</option>
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
              </TextField>

              <TextField
                style={{ padding: 10, width: 180 }}
                id="outlined-select-currency-native"
                select
                label="GENDER"
                name="Gender"
                SelectProps={{
                  native: true
                }}
                variant="outlined"
                onClick={this.myChangeHandler}
              >
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="">ALL</option>
              </TextField>
            </Grid>

            <Grid container style={{ marginTop: 30 }}
              direction="row"
              justify="center"
              alignItems="flex-end">

              <Button style={{ padding: 12, width: 358, background: '#424242', color: "white" }} type="submit" onClick={this.mySubmitHandler}  >SUBMIT</Button>
            </Grid>

          </form>
        </Zoom>

      </Grid>





    )
  }
}


export default withStyles(styles)(Layout)

//default connect(mapStateToProps, mapDispatchToProps)(SignIn)