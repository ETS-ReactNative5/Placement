import React, { Component } from 'react';
import Validation from 'simple-react-validator'
import axios from "axios"
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BI from '../../Image/simplebg.jpg'
import Grow from '@material-ui/core/Grow';


export default class BasicTextFields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Company: '',
            location: '',
            Criteria: '',
            DOD: '',
            Description: '',
            degree: {
            }

        }
        this.Validator = new Validation({
            messages: {
                default: 'required'
            }
        });

    }
    handleChange = (event) => {
        console.log("change", event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    };
    handleCheck = (event) => {
        let value = event.target.name;
        if (event.target.checked) {

            if (value === "MCA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MCA: true
                    })
                })
            }
            if (value === "MBA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MBA: true
                    })
                })
            }
            if (value === "CSE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CSE: true
                    })
                })
            }
            if (value === "ECE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ECE: true
                    })
                })
            }
            if (value === "ME") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ME: true
                    })
                })
            } if (value === "AE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        AE: true
                    })
                })
            } if (value === "EE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        EE: true
                    })
                })
            }
            if (value === "CE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CE: true
                    })
                })
            }
        }

        else {
            if (value === "MCA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MCA: false
                    })
                })
            }
            if (value === "MBA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MBA: false
                    })
                })
            }
            if (value === "CSE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CSE: false
                    })
                })
            }
            if (value === "ME") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ME: false
                    })
                })
            }
            if (value === "AE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        AE: false
                    })
                })
            }
            if (value === "ECE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ECE: false
                    })
                })
            }
            if (value === "CE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CE: false
                    })
                })
            }
            if (value === "EE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        EE: false
                    })
                })
            }
        }
    }
    SubmitHandler = () => {
        event.preventDefault();
        if (this.Validator.allValid()) {
            axios.post("http://localhost:3010/InsertDrive", this.state)
            .then(alert("Drive Added"),
          this.props.history.push("/HomeAdmin"))
        }
        else {
            this.Validator.showMessages()
            this.forceUpdate();

        }
    };
    render() {
        return (

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
                <Grow in timeout={2000}>
                <Paper elevation={10} style={{ marginTop: 20, padding: 10 }}>
                    <Typography variant='h4' style={{ paddingLeft: 280, fontStyle: 'italic' }}>Add Drive</Typography>

                    <form className="DriveFrom">
                        <TextField
                            label="Company Name"
                            name="Company"
                            variant="outlined"
                            onChange={this.handleChange}
                            style={{ width: 320, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                        />
                        {this.Validator.message('Company', this.state.Company, 'required')}
                        <TextField
                            label="Location"
                            name="location"
                            variant="outlined"
                            onChange={this.handleChange}
                            style={{ width: 320, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}

                        /><br />
                        {this.Validator.message('location', this.state.location, 'required')}
                        <TextField
                            label="Description"
                            variant="outlined"
                            name="Description"
                            onChange={this.handleChange}
                            style={{ width: 320, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                        />
                        {this.Validator.message('Description', this.state.Description, 'required')}

                        <TextField
                            label="Criteria"
                            name="Criteria"
                            variant="outlined"
                            onChange={this.handleChange}
                            style={{ width: 160, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                        />
                        {this.Validator.message('Criteria', this.state.Criteria, 'required')}
                        {/*     <FormLabel style={{ marginLeft:9, marginTop: 15, width: 300, marginRight: 30 }} component="legend">Pick the  Date of upcoming Drive</FormLabel> */}

                        <TextField
                            onChange={this.handleChange}
                            name="DOD"
                            variant="outlined"
                            style={{ width: 160, marginTop: 15 }}
                            type="date"
                        />
                        {this.Validator.message('DOD', this.state.DOD, 'required')}


                        <FormLabel style={{ marginLeft: 30, marginTop: 20, width: 300, marginRight: 30 }} component="legend">Pick the candidates can apply, atleats one</FormLabel>
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                        >

                            <FormControl>
                                <FormGroup style={{ paddingRight: 140 }}>
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleCheck} name="MBA" />}
                                        label="MBA"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox onChange={this.handleCheck} name="MCA" />}
                                        label="MCA "
                                    />
                                </FormGroup>
                            </FormControl>
                            <FormControl>
                                <FormGroup style={{ paddingRight: 140 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox onChange={this.handleCheck} name="CSE" />
                                        }
                                        label="CSE "
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox onChange={this.handleCheck} name="ME" />
                                        }
                                        label="ME"
                                    />
                                </FormGroup>
                            </FormControl>


                            <FormControl>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox onChange={this.handleCheck} name="AE" />
                                        }
                                        label="AE"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox onChange={this.handleCheck} name="ECE" />
                                        }
                                        label="ECE"
                                    />

                                </FormGroup >
                            </FormControl>



                        </Grid>
                        {this.Validator.message('Degree', this.state.degree.MBA || this.state.degree.ME || this.state.degree.MCA || this.state.degree.CSE || this.state.degree.ECE || this.state.degree.AE || this.state.degree.EE || this.state.degree.CE, 'required|accepted')}

                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Button variant="contained" color="primary" style={{ width: 300 }} block onClick={this.SubmitHandler} >
                                Submit
                                </Button>

                        </Grid>


                    </form>
                </Paper>

                 </Grow>
                
            </Grid>

        );
    }
}
