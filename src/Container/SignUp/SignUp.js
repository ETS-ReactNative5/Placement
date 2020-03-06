import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import BI from '../../Image/bg1.jpg'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Validation from 'simple-react-validator'
import Avatar from '@material-ui/core/Avatar';
import axios from "axios"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function getSteps() {
    return ['Personal Details', 'Educational Details', 'Contact Detail'];
}

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        backgroundImage: `url(${BI})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "auto"

    },
    paper: {
        padding: theme.spacing(3),
        // textAlign: 'center',
        background: 'transparent',
        opacity: '100%',
        height: "100vh",
        width: theme.spacing(50)
    },
    next: {
        marginLeft: 280

    },
});

class FormStepper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            Name: "",
            Email: "",
            Branch: "",
            RollNo: "",
            Year: "",
            MobileNumber: "",
            Gender: "",
            Address: "",
            Age: "",
            FatherName: "",
            MotherName: "",
            DOB: "",
            SSC: "",
            HSC: "",
            Btech: "",
            Backlogs: "",
            SchoolSSC: "",
            SchoolHHC: "",
            Password: "",
            file: '',
            imagePreviewUrl: '',
            image: ''
        }
        this.validator = new Validation();
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log("API caliing signup", this.state)
        if (this.validator.allValid()) {
            console.log("AllValidate", this.state)
            alert("Record Added")
            this.props.history.push('/')
            // this.props.action.auth.Signup(this.state)
            axios.post("http://localhost:3010/InsertUser", this.state)
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
            alert("Empty field can't be submitted")
        }

    }
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            console.log("image code", event.target.files[0].size)
            if (event.target.files[0].size > 5000) {
                alert("image size is not acceptable")
                event.target.value=''

            }
            else {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.setState({ image: e.target.result });
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }

    }
    myChangeHandler = (event) => {
        event.preventDefault();
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }


    getStepContent(step) {
        debugger;
        // console.log(step);
        switch (step) {

            case 1:
                return (
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-start"

                    >
                        <Paper style={{ background: "transparent", margin: '30', padding: '5' }}>
                            <Typography>Personal Details</Typography>
                            <Avatar style={{ height: 100, width: 100 }} src={this.state.image} />
                            <TextField
                                style={{ padding: 8, width: 300 }}
                                type="file"
                                variant="outlined"
                                onChange={this.onImageChange}
                            />
                            {this.validator.message("image", this.state.image, "required")}
                            <br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Enter Name"
                                type="text"
                                variant="outlined"
                                name="Name"
                                value={this.state.Name}
                                required="true"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Name")}
                            /><br />
                            {this.validator.message("Name", this.state.Name, "required")}
                            <TextField
                                style={{ padding: 8, width: 150 }}

                                label="Enter Age"
                                type="number"
                                variant="outlined"
                                value={this.state.Age}
                                name="Age"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Age")}
                            />
                            {this.validator.message("Age", this.state.Age, "required")}
                            <TextField
                                style={{ padding: 8, width: 150 }}
                                id="outlined-select-currency-native"
                                select
                                label="gender"
                                SelectProps={{
                                    native: true
                                }}
                                name="Gender"
                                value={this.state.Gender}
                                variant="outlined"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("gender")}
                            >
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </TextField>
                            {this.validator.message(
                                "gender",
                                this.state.Gender,
                                "required"
                            )}
                            <br />

                            <TextField
                                style={{ padding: 8, width: 300 }}

                                name="FatherName"
                                label="Father Name"
                                type="text"
                                value={this.state.FatherName}
                                variant="outlined"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("FatherName")}
                            />

                            {this.validator.message(
                                "FatherName",
                                this.state.FatherName,
                                "required"
                            )}<br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Mother Name"
                                type="text"
                                variant="outlined"
                                value={this.state.MotherName}
                                name="MotherName"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("MotherName")}
                            />

                            {this.validator.message(
                                "MotherName",
                                this.state.MotherName,
                                "required"
                            )}<br />
                            <TextField
                                style={{ padding: 8, width: 300 }}
                                id="date"
                                label="DOB"
                                type="date"
                                value={this.state.DOB}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                name="DOB"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("DOB")}
                                variant="outlined"
                            />
                            {this.validator.message(
                                "DOB",
                                this.state.DOB,
                                "required"
                            )}<br />< br />
                            <Button style={{ marginLeft: 250 }} onClick={this.nextStep}>
                                <ArrowForwardIcon />
                            </Button>
                            {/* <ArrowForwardIcon style={{marginLeft:250}} onClick={this.nextStep}/> */}

                            {/* <button onClick={this.nextStep}>next</button> */}

                            {/* <button onClick={this.prevStep}>Back</button> */}
                        </Paper>

                    </Grid>


                )
            case 2:
                return (
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Paper style={{ background: "transparent", margin: '30', padding: '10' }}>
                            <Typography>Educational Details</Typography>

                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Enter Roll Number"
                                type="text"
                                variant="outlined"
                                name="RollNo"
                                value={this.state.RollNo}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Roll Number")}
                            />
                            {this.validator.message(
                                "Roll Number",
                                this.state.RollNo,
                                "required"
                            )}
                            <br />
                            <TextField
                                style={{ padding: 8, width: 150 }}

                                label="Year"
                                type="number"
                                variant="outlined"
                                name="Year"
                                value={this.state.Year}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Year")}
                            />
                            {this.validator.message(
                                "Year",
                                this.state.Year,
                                "required"
                            )}
                            <TextField
                                style={{ padding: 8, width: 150 }}
                                id="outlined-select-currency-native"
                                onChange={this.myChangeHandler}
                                select
                                label="Branch"
                                SelectProps={{
                                    native: true
                                }}
                                name="Branch"
                                variant="outlined"
                                value={this.state.Branch}
                                onBlur={() => this.validator.showMessageFor("Branch")}
                            > <option></option>
                                <option value="CSE">CSE</option>
                                <option value="ME">ME</option>
                                <option value="CE">CE</option>
                                <option value="EE">EE</option>
                                <option value="ECE">ECE</option>
                                <option value="AE">AE</option>
                                <option value="MBA">MBA</option>
                                <option value="MCA">MCA</option>
                            </TextField> <br />

                            {this.validator.message(
                                "Branch",
                                this.state.Year,
                                "required"
                            )}
                            <TextField
                                style={{ padding: 8, width: 150 }}

                                label="10th percentage"
                                type="number"
                                variant="outlined"
                                name="SSC"
                                value={this.state.SSC}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("SSC")}
                            />
                            {this.validator.message("SSC", this.state.SSC, "required")}
                            <TextField
                                style={{ padding: 8, width: 150 }}

                                label="12th percentage"
                                type="number"
                                variant="outlined"
                                name="HSC"
                                value={this.state.HSC}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("HSC")}
                            />
                            {this.validator.message(
                                "HSC",
                                this.state.HSC,
                                "required"
                            )} <br />
                            <TextField
                                style={{ padding: 8, width: 150 }}

                                label="B.tech"
                                type="number"
                                value={this.state.Btech}
                                variant="outlined"
                                name="Btech"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Btech")}
                            />
                            {this.validator.message(
                                "Btech",
                                this.state.Btech,
                                "required"
                            )}
                            <TextField
                                style={{ padding: 8, width: 150 }}

                                label="Enter Backlogs"
                                type="number"
                                variant="outlined"
                                value={this.state.Backlogs}
                                name="Backlogs"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Backlogs")}
                            />
                            {this.validator.message(
                                "Backlogs",
                                this.state.Backlogs,
                                "required"
                            )} <br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="10th School Name"
                                type="text"
                                variant="outlined"
                                name="SchoolSSC"
                                value={this.state.SchoolSSC}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("SchoolSSC")}
                            />
                            {this.validator.message(
                                "SchoolSSC",
                                this.state.SchoolSSC,
                                "required"
                            )}
                            <br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="12th School Name"
                                type="text"
                                value={this.state.SchoolHHC}
                                variant="outlined"
                                name="SchoolHHC"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("SchoolHHC")}
                            /> <br />
                            {this.validator.message(
                                "SchoolHHC",
                                this.state.SchoolHHC,
                                "required"
                            )} <br />
                            <Button onClick={this.prevStep}>
                                <ArrowBackIcon />
                            </Button>
                            <Button style={{ marginLeft: 180 }} onClick={this.nextStep}>
                                <ArrowForwardIcon />
                            </Button>
                            {/* <ArrowBackIcon onClick={this.prevStep} /> */}
                            {/* <ArrowForwardIcon style={{marginLeft:250}} onClick={this.nextStep}/> */}

                            {/* <button onClick={this.nextStep}>next</button> */}
                            {/* <button onClick={this.prevStep}>Back</button> */}


                        </Paper>

                    </Grid>

                )
            case 3:
                return (
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Paper style={{ background: "transparent", margin: '30', padding: '10' }}>
                            <Typography>Contact Details</Typography>

                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Enter Email"
                                type="email"
                                variant="outlined"
                                name="Email"
                                value={this.state.Email}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Email")}
                            />
                            {this.validator.message(
                                "Email",
                                this.state.Email,
                                "required|email"
                            )}
                            <br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Password"
                                type="password"
                                variant="outlined"
                                value={this.state.Password}
                                name="Password"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Password")}
                            />
                            {this.validator.message(
                                "Password",
                                this.state.Password,
                                "required"
                            )}
                            <br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Mobile Number"
                                type="tel"
                                variant="outlined"
                                name="MobileNumber"
                                value={this.state.MobileNumber}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("MobileNumber")}
                            />
                            {this.validator.message(
                                "Mobile Number",
                                this.state.MobileNumber,
                                "required"
                            )}
                            <br />
                            <TextField
                                style={{ padding: 8, width: 300 }}

                                label="Enter Address"
                                type="text"
                                variant="outlined"
                                name="Address"
                                value={this.state.Address}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Address")}
                            /> <br />
                            {this.validator.message(
                                "Address",
                                this.state.Address,
                                "required"
                            )}
                            <br />

                            <Button variant="contained" color="primary" style={{ width: 300 }} block onClick={this.mySubmitHandler}>
                                Submit
</Button>
                            <br />
                            <br />
                            <Button onClick={this.prevStep}>
                                <ArrowBackIcon />
                            </Button>
                            {/* <ArrowBackIcon onClick={this.prevStep} /> */}

                            {/* <button onClick={this.nextStep}>next</button> */}
                            {/* <button onClick={this.prevStep}>Back</button> */}
                        </Paper>

                    </Grid>

                )
            default:
                return 'Unknown step';
        }
    }

    //Proceed to next step
    nextStep = () => {
        console.log("next step called")
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    render() {
        const steps = getSteps();
        const activeStep = this.state.step;
        const { classes } = this.props;
        console.log("state of signup", this.state)
        return (
            <Grid className={classes.root}>

                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};


                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div >
                    <Typography >{this.getStepContent(activeStep)}</Typography>
                </div>



            </Grid>
        );
    }
}
export default (withStyles(useStyles)(FormStepper));
