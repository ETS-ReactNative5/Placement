import { SignUP, LogIN, inValid ,LOGOUT} from "../reducer/reducer"

import axios from "axios"


export function Login(data) {

    return (dispatch) => {

        return new Promise((resolve, reject) => {
             debugger
            axios.post("http://localhost:3010/verify", data)

                .then((response) => {
                 console.log("Action response",response)
                    if (response) {
                        localStorage.setItem("token", response.data.token)
                        localStorage.setItem("role", response.data.result.Role)
                        localStorage.setItem("data", JSON.stringify(response.data.result))
                        
                        dispatch({
                            type: LogIN,
                            data: response.data
                        });
                        return resolve(response.data);
                    }
                    else {
                        dispatch({
                            type: inValid,
                            data: response.data
                        });
                        return resolve(response.data);
                    }
                }).catch((error) => {
                    if (error) {

                        return reject(error);

                    }
                })
        })
    }
}

export function Signup(data) {

    return (dispatch) => {

        return new Promise((resolve, reject) => {

            axios.post("http://localhost:3010/InsertUser", data)
                .then((response) => {
                    if (response) {

                        dispatch({
                            type: SignUP,
                            data: response.data
                        });
                        return resolve(response.data);
                    }
                    else {
                        dispatch({
                            type: inValid,
                            data: response.data
                        });
                        return resolve(response.data);
                    }

                }).catch((error) => {
                    if (error) {
                        // dispatch({ type: ERROR, data: "error" })
                        return reject(error);

                    }
                })
        })
    }
}
export const Logout = () => {
    debugger;
    return dispatch => {
            dispatch({
              type: LOGOUT,
              data:" "
            });
    
    };
  };