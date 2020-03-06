import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding:20,
      
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        height:'auto'
        //  width: theme.spacing(100),
        // height:400,



    },
    table: {
        minWidth: 650,

    }
});
class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NotificationValue: '',
            DriveNotification: []
        }
    }

    componentWillMount() {
        const r = localStorage.getItem("data")
        var details = JSON.parse(r)
        var name = details.Name
        console.log("dettails", name)
        console.log("api calling")
        // axios.post("http://localhost:3010/NullNotification",name)
        // .then(
        axios.post("http://localhost:3010/NotificationTableData", name)
            .then((res) => {
                console.log(res.data)
                this.setState({ DriveNotification: res.data })
            })

        // )
    }

    render() {

        const { classes } = this.props;
        return (

            <div className={classes.root}>
                {/* <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                > */}
                    <Grid item xs={12}  >
                    <Paper className={classes.paper} elevation={20}>
                        <TableContainer component={Paper}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>CompanyName</TableCell>
                                        <TableCell >Date of Drive</TableCell>
                                        <TableCell >Eligible branches</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.DriveNotification.map(row => (
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                {row.Company}
                                            </TableCell>
                                            <TableCell >{row.DOD}</TableCell>
                                            <TableCell >{row.degree}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                {/* </Grid> */}


            </div>
        )
    }
}
export default (withStyles(useStyles))(Notification)
// export default Notification