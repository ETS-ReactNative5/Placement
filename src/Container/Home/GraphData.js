import React, { Component } from 'react';
import axios from "axios"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fade from "@material-ui/core/Fade";
import Bottom from '../../Image/blank.jpg'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const useStyles = theme => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        backgroundImage: `url(${Bottom})`,
        backgroundRepeat: "no-repeat",
        overflow: "auto"

    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft: 20,
    },
    table: {
        minWidth: 650,
        padding: 20,
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
        axios.post("http://localhost:3010/PlacementGraphdata")
            .then((res) => {
                console.log(res.data)
                this.setState({ Drive: res.data })
                // localStorage.setItem("GraphData", JSON.stringify(res.data))

            })

    }
    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>

                <Fade in timeout={2000}>
                    <Typography style={{ fontSize: 40, marginLeft: '30%' }}>Placement Overview</Typography>
                </Fade>
                <Fade in timeout={4000}>
                    <Grid item xs={12} sm={10} lg={12} md={12}>
                        <Paper className={classes.paper} elevation={10}>
                            <TableContainer component={Paper}>
                                <Table id="table-to-xls" size="small" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Year</TableCell>
                                            <TableCell >CSE</TableCell>
                                            <TableCell > EC</TableCell>
                                            <TableCell >AE</TableCell>
                                            <TableCell > ME</TableCell>
                                            <TableCell >CE</TableCell>
                                            <TableCell > MCA</TableCell>
                                            <TableCell > MBA</TableCell>
                                            <TableCell > EE</TableCell>



                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.Drive.map(row => (
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    {row.Year}
                                                </TableCell>
                                                <TableCell>{row.CSE}</TableCell>
                                                <TableCell>{row.EC}</TableCell>
                                                <TableCell>{row.AE}</TableCell>
                                                <TableCell>{row.ME}</TableCell>
                                                <TableCell>{row.CE}</TableCell>
                                                <TableCell>{row.MCA}</TableCell>
                                                <TableCell>{row.MBA}</TableCell>
                                                <TableCell>{row.EE}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Grid
                            container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                style={{padding:20}}
                            >
                                <ReactHTMLTableToExcel
                                    id="test-table-xls-button"
                                    className="download-table-xls-button"
                                    table="table-to-xls"
                                    filename="tablexls"
                                    sheet="tablexls"
                                    buttonText="Download as XLS"

                                />
                            </Grid>
                        </Paper>

                    </Grid>
                </Fade>

            </div>
        );

    }



}
// export default FullWidthGrid
export default (withStyles(useStyles))(UpcomingDrive)