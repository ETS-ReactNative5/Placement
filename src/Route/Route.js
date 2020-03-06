import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
debugger
class CRoute extends Component {
    getExtractedJSON({ component, cprivate, crole, actions, auth, ...rest }) {
        return rest;
    }

    render() {

        const rest = this.getExtractedJSON(this.props);
        console.log("Cutom Route", this.props.auth)
        const LoggedIn = this.props.auth.token && this.props.auth.token !== "";
        const role = this.props.auth.role
        const { component } = this.props;
        const Component = component;

        let redirect = undefined

        if (LoggedIn && rest.path === '/' && role === "admin") {

            redirect = "/HomeAdmin"
        }
        else if (LoggedIn && rest.path === '/' && role === "user") {

            redirect = "/HomeUser"
        }
        else if (!LoggedIn && rest.path === '/HomeAdmin') {

            redirect = "/SignUp"
        }
        else if (LoggedIn && rest.path === "/SignUp") {
            redirect = "/"
        }
        else if(LoggedIn &&role==="user" && (rest.path === "/HomeAdmin"||rest.path === "/GraphData"||rest.path === "/StudentDetail"||rest.path === "/StudentDetail"))
        {   
            redirect = "/Invalid";  
        }

        // else if (LoggedIn && cprivate && crole && crole.filter((item) => item ===role).length === 0) {

        //     redirect = "/Invalid";
        // }



        return (
            <Route
                {...rest}
                render={props => (
                    (redirect) ? <Redirect to={{ pathname: redirect, state: { from: props.location } }} />
                        : <Component {...props} />

                )}
            />
        )
    }
}
const mapStateToProps = (state) => {
    const auth = state;
    console.log("role", state.role)


    return {
        auth: auth
    }
}


const mapDispatchToProps = dispatch => ({
    actions: {

    }
});
export default connect(mapStateToProps, mapDispatchToProps)(CRoute)