import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CancelIcon from '@material-ui/icons/Cancel';
import { green } from '@material-ui/core/colors';
import Zoom from '@material-ui/core/Zoom';
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    padding:20

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: theme.spacing(45)
          // width: theme.spacing(150),
  },
  button: {
    width: 200,

  }
});

class FullWidthGrid extends Component {
  //   componentWillMount() {
  //     const r = localStorage.getItem("data")
  //     console.log("r", r)
  //     var details = JSON.parse(r)
  //     var name = details.Name
  //     console.log("dettails", details)
  //     console.log("api calling")
  //     axios.post("http://localhost:3010/NotificationValue", name)
  //         .then(res => {
  //             console.log("home user api", res.data.result)
  //             this.setState({ NotificationValue: res.data.result })

  //         })
  // }
  render() {
    const r = localStorage.getItem("data")
    var details = JSON.parse(r)
    const { classes } = this.props;
    const Example = () => <Avatar style={{ width: 130, height: 130, marginLeft:20}} src={details.image} />
    return (
      <div className={classes.root}>
         <Zoom in timeout={1500}>
         <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper elevation={0}> 
          <Typography style={{ fontSize: 40 }}>Welcome {details.Name}
          {(details.Approve===1)?<VerifiedUserIcon style={{ color: green[500],fontSize:50 }}/>:<CancelIcon color="secondary"  style={{fontSize:50 }}/>}
          </Typography>
       </Paper>
        </Grid>
          <Grid item xs={12} sm={5}>
            <Paper elevation={10} className={classes.paper} square>
             <Example />
              <Table >

                <TableBody>
                  <TableRow>
                    <TableCell >Father's Name</TableCell>
                    <TableCell >{details.FatherName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell >Mother's Name</TableCell>
                    <TableCell >{details.MothersName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell >Gender</TableCell>
                    <TableCell >{details.Gender}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell >Birth Date</TableCell>
                    <TableCell >{details.DOB}</TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <Paper elevation={10} className={classes.paper} > <Table >
              <TableBody>

                <TableRow>
                  <TableCell >Higher Secondary  School Name</TableCell>
                  <TableCell >{details.HSCSCHOOLNAME}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell >Higer Secondary Score</TableCell>
                  <TableCell >{details.HSC}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell >Senior Secondary  School Name</TableCell>
                  <TableCell >{details.SSCSCHOOLNAME}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell >Senior Secondary Score</TableCell>
                  <TableCell >{details.SSC}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell >BTech Aggregate</TableCell>
                  <TableCell >{details.BTECHAGGREGATE}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell >Active Backlogs</TableCell>
                  <TableCell >{details.Backlogs}</TableCell>
                </TableRow>

              </TableBody>
            </Table>
            </Paper>
          </Grid>

          <Grid item xs={12}>

            <Button className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => { this.props.history.push('/EditHomeUser') }}
            >Download
              </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => { this.props.history.push('/EditHomeUser') }}
            >EDIT
            </Button>

          </Grid>

        </Grid>
      
        </Zoom>
        {/* <Typography style={{ fontSize: 40 }}>Welcome {details.Name}</Typography> */}
       </div>
    );

  }



}
// export default FullWidthGrid
export default (withStyles(useStyles))(FullWidthGrid)