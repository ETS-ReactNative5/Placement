import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import Zoom from '@material-ui/core/Zoom';
import BI from '../../Image/bg3.jpg'

import { Grid, Typography } from '@material-ui/core';



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

      Year: "",

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
    event.preventDefault();
    console.log("submitt")
    console.log(this.state)
    if (this.state.Year === "") {
      alert("select a year")
    }
    else {
      axios.post("http://localhost:3010/CompanyDetail", this.state)
        .then((response) => {
          console.log("response", response.data)

          localStorage.setItem("CompanyDetail", JSON.stringify(response.data))

          this.props.history.push('/CompanyDetailList')
          // k= JSON.stringify(response.data)
          // localStorage.setItem("data",k)
          // window.location.href='/ViewStudent'
          //     this.props.history.push("/ViewStudent");

        }).catch(er => {
          console.log(er);
          // alert(er)
        })
    }


    // this.props.action.auth.ViewStudent(this.state)

  }

  render() {


    return (
      // <main className={classes.content}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"

        xs={12}
        style={{
          backgroundImage: `url(${BI})`,
          backgroundRepeat: "no-repeat",
          paddingLeft: 20,
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <Zoom in timeout={1000}>
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

            <Grid container style={{ marginTop: 30 }}
              direction="row"
              justify="center"
              alignItems="flex-end">
              <TextField
                style={{ padding: 10, width: 363 }}
                id="outlined-select-currency-native"
                select
                label="YEAR "
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
                <option value="2020">2020</option>

              </TextField>
            </Grid>
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