import React, { Component } from 'react';
import axios from "axios"
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
         padding: theme.spacing(5),
         textAlign: 'center',
        color: theme.palette.text.secondary,
        // height: theme.spacing(20),
    //   width: theme.spacing(150),
        // height:400,
        marginLeft:20,


    },
table:{
    minWidth:650,
    padding:20,
    }
});

class UpcomingDrive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Drive: []
        }
    }
    componentWillMount() {
        axios.post("http://localhost:3010/DriveData")
            .then((res) => {
                console.log(res.data)
                this.setState({ Drive: res.data })
            })

    }
    render() {
        const r = localStorage.getItem("data")
        var details = JSON.parse(r)
        const { classes } = this.props;
        const Example = () => <Avatar style={{ width: 130, height: 130, marginLeft: 20, marginTop: 10 }} src={details.image} />
        return (
            <div className={classes.root}>
                {/* <Typography style={{ fontSize: 40 }}>Welcome {details.Name}</Typography> */}
                {/* <Grid container> */}
                   <Grid item xs={12}>
                        <Paper className={classes.paper} elevation={10}> 
                        <TableContainer component={Paper}>
                            <Table size="small" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>CompanyName</TableCell>
                                        <TableCell >Location</TableCell>
                                        <TableCell >Criteria</TableCell>
                                        <TableCell >Date of Drive</TableCell>
                                        <TableCell >Description</TableCell>
                                        <TableCell >Eligible branches</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.Drive.map(row => (
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {row.Company}
                                            </TableCell>
                                            <TableCell>{row.location}</TableCell>
                                            <TableCell>{row.Criteria}</TableCell>
                                            <TableCell>{row.DOD}</TableCell>
                                            <TableCell>{row.Description}</TableCell>
                                            <TableCell>{row.degree}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table> 
                            </TableContainer>


                      </Paper>
                
                      </Grid>

                {/* </Grid> */}
            </div>
        );

    }



}
// export default FullWidthGrid
export default (withStyles(useStyles))(UpcomingDrive)