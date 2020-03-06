import React, { Component } from 'react';
import Validation from 'simple-react-validator'
import axios from "axios"

import { connect } from 'react-redux'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


import { Form } from 'reactstrap';

class EditHomeUser extends Component {
    constructor(props) {
        const details = JSON.parse(props.response.data)

        console.log("props ki defaultValue", details)

        super(props)
        this.state = {
            Name: details.Name,
            Email: details.Email,
            Branch: details.FatherName,
            RollNo: details.RollNo,
            Year: details.Year,
            MobileNumber: details.MobileNumber,
            Gender: details.Gender,
            Address: details.Address,
            Age: details.Age,
            FatherName: details.FatherName,
            MotherName: details.MothersName,
            DOB:details.DOB,
            SSC: details.SSC,
            HSC: details.HSC,
            Btech: details.BTECHAGGREGATE,
            Backlogs: details.Backlogs,
            SchoolSSC: details.SSCSCHOOLNAME,
            SchoolHHC: details.HSCSCHOOLNAME,
            Password: details.Password,
            imagePreviewUrl: details.image,
            image:details.image

        };
        this.validator = new Validation();
    }
     App = () => {
        console.log("call to hua hai")
        
        
     }
        
    mySubmitHandler = (event) => {
        const details = JSON.parse(this.props.response.data)
        const n = details.Name
        console.log("name sent", n)
        event.preventDefault();

        if (this.validator.allValid()) {
            alert("updated")
            console.log(this.state)
            // this.props.action.auth.Signup(this.state)
            axios.post("http://localhost:3010/UpdateUser", { data: this.state, name: n })


        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    }
    // download = () => {
    //     console.log("downloading")
    //     const element = document.createElement("a");
    //     const brr = JSON.stringify(this.state);
    //     console.log("brr", [brr])
    //     const file = new Blob([brr]);
    //     element.href = URL.createObjectURL(file);

    //     element.download = "myFile.csv";
    //     document.body.appendChild(element);
    //     element.click();
    // }
    myChangeHandler = (event) => {
        event.preventDefault();

        this.setState({ [event.target.name]: event.target.value })
    }
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            console.log("image code", event.target.files[0])
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ image: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
   
    render() {
        const details = JSON.parse(this.props.response.data)

        console.log("edit state", this.props.response.data)
       
        return (
            <div>

                {/* <CSVDownload data={details} target="_blank" />;dsd */}
                {/* <Export enabled={true} /> */}
                <Form className="SignUpFrom" >
                    <div>

                        <div className="form-group">
                        <img id="target" src={this.state.image} alt=""/>
                            <TextField
                                style={{ padding: 8, width: 250 }}
                                type="file"
                                variant="outlined"
                               onChange={this.onImageChange}

                            />
                            <br />
                            <TextField
                                style={{ padding: 10, width: 363 }}
                                id="outlined-password-input"
                                label="Enter Name"
                                type="text"
                                variant="outlined"
                                name="Name"
                                defaultValue={details.Name}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("Name")}
                            />
                           {this.validator.message("Name", this.state.Name, "required")}
                            <TextField
                                style={{ padding: 10, width: 363 }}
                                // id="outlined-password-input"
                                name="FatherName"
                                label="Father Name"
                                type="text"
                                variant="outlined"
                                defaultValue={details.FatherName}
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("FatherName")}
                            />
                            {this.validator.message(
                                "FatherName",
                                this.state.FatherName,
                                "required"
                            )}
                            <TextField
                                style={{ padding: 10, width: 363 }}
                                label="Mother Name"
                                type="text"
                                variant="outlined"
                                defaultValue={details.MothersName}
                                name="MotherName"
                                onChange={this.myChangeHandler}
                                onBlur={() => this.validator.showMessageFor("MotherName")}
                            />
                            {this.validator.message(
                                "MotherName",
                                this.state.MotherName,
                                "required"
                            )}
                        </div>
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Mobile Number"
                            type="tel"
                            variant="outlined"
                            name="MobileNumber"
                            defaultValue={details.MobileNumber}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("MobileNumber")}
                        />
                        {this.validator.message(
                            "Mobile Number",
                            this.state.MobileNumber,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Year"
                            type="number"
                            variant="outlined"
                            name="Year"
                            defaultValue={details.Year}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Year")}
                        />
                        {this.validator.message(
                            "Year",
                            this.state.Year,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-select-currency-native"
                            onChange={this.myChangeHandler}
                            select
                            label="Branch"
                            defaultValue={details.Branch}
                            SelectProps={{
                                native: true
                            }}
                            name="Branch"
                            variant="outlined"
                        >
                            <option></option>
                            <option value="CSE">CSE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="EE">EE</option>
                            <option value="ECE">ECE</option>
                            <option value="AE">AE</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                        </TextField>
                        {this.validator.message(
                            "Branch",
                            this.state.Year,
                            "required"
                        )}

                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="date"
                            label="DOB"
                            type="date"
                            InputLabelProps={{
                                shrink: true
                            }}
                            format="YYYY-MM-DD"
                            defaultValue={details.DOB}
                            name="DOB"

                            onChange={this.myChangeHandler}
                            variant="outlined"
                        />
                      {this.validator.message(
                        "DOB",
                        this.state.DOB,
                        "required"
                    )}


                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-select-currency-native"
                            select
                            label="gender"
                            SelectProps={{
                                native: true
                            }}
                            name="Gender"
                            defaultValue={details.Gender}
                            variant="outlined"
                            onChange={this.myChangeHandler}
                        >
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </TextField>
                        {this.validator.message(
                            "gender",
                            this.state.Year,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Enter Roll Number"
                            type="text"
                            variant="outlined"
                            name="RollNo"
                            defaultValue={details.RollNo}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Roll Number")}
                        />
                        {this.validator.message(
                            "Roll Number",
                            this.state.RollNo,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Enter Age"
                            type="number"
                            variant="outlined"
                            name="Age"
                            defaultValue={details.Age}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Age")}
                        />
                        {this.validator.message("Age", this.state.Age, "required")}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Enter Email"
                            type="email"
                            variant="outlined"
                            name="Email"
                            defaultValue={details.Email}

                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Email")}
                        />
                        {this.validator.message(
                            "Email",
                            this.state.Email,
                            "required|email"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Enter Address"
                            type="text"
                            variant="outlined"
                            name="Address"
                            defaultValue={details.Address}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Address")}
                        />
                        {this.validator.message(
                            "Address",
                            this.state.Address,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="10th percentage"
                            type="number"
                            variant="outlined"
                            name="SSC"
                            defaultValue={details.SSC}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("SSC")}
                        />
                        {this.validator.message("SSC", this.state.SSC, "required")}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="12th percentage"
                            type="number"
                            variant="outlined"
                            name="HSC"
                            defaultValue={details.HSC}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("HSC")}
                        />
                        {this.validator.message(
                            "HSC",
                            this.state.HSC,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="B.tech percentage"
                            type="number"
                            variant="outlined"
                            name="Btech"
                            defaultValue={details.BTECHAGGREGATE}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Btech")}
                        />
                        {this.validator.message(
                            "Btect",
                            this.state.Btech,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Enter Backlogs"
                            type="text"
                            variant="outlined"
                            name="Backlogs"
                            defaultValue={details.Backlogs}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("Backlogs")}
                        />
                        {this.validator.message(
                            "Backlogs",
                            this.state.Backlogs,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="10th School Name"
                            type="text"
                            variant="outlined"
                            name="SchoolSSC"
                            defaultValue={details.SSCSCHOOLNAME}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("SchoolSSC")}
                        />
                        {this.validator.message(
                            "SchoolSSC",
                            this.state.SchoolSSC,
                            "required"
                        )}
                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="12th School Name"
                            type="text"
                            variant="outlined"
                            name="SchoolHHC"
                            defaultValue={details.HSCSCHOOLNAME}
                            onChange={this.myChangeHandler}
                            onBlur={() => this.validator.showMessageFor("SchoolHHC")}
                        />
                        {this.validator.message(
                            "SchoolHHC",
                            this.state.SchoolHHC,
                            "required"
                        )}

                        <TextField
                            style={{ padding: 10, width: 363 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="outlined"
                            name="Password"

                            onChange={this.myChangeHandler}
                            defaultValue={details.Password}
                            onBlur={() => this.validator.showMessageFor("Password")}
                        />
                        {this.validator.message(
                            "Password",
                            this.state.Password,
                            "required"
                        )}

                    </div>

                    <Button size="lg"
                        variant="contained"
                        color="primary"
                        block
                        onClick={this.mySubmitHandler}>
                        Submit
                    </Button>&nbsp;&nbsp;
                    {/* <CSVLink data={this.props.response.data} separator={","} >
                        <Button size="lg"
                            variant="contained"
                            color="primary"
                            block>download</Button>
                    </CSVLink> */}

                    {/* <p className={"text-right"}>
      <a href="" onClick={this.changePage.bind(this)}>
        Sign In
      </a>
    </p> */}
     <Button size="lg"
                        variant="contained"
                        color="primary"
                        block
                        onClick={() => { this.props.history.push('/Resume') }}>
                       download
                    </Button>&nbsp;&nbsp;
   
   
                </Form>
            </div>

        )
    }
}
const mapStateToprops = (state) => {
    const response = state
    return {
        response: response
    }
}
const mapDispatchToProps = () => ({
    action: {

    }
})
export default connect(mapStateToprops, mapDispatchToProps)(EditHomeUser);

// export default EditHomeUser