const initialState = {
    data:"",
    msg: "",
    token:'',
    role:""

};


export const inValid = "inValid"
export const SignUP = "Signup"
export const LogIN="Login"
export const LOGOUT="LOGOUT"
const reducer = (state = initialState, action) => {
const newState = { ...state };

  debugger
    if (action.type === "Login") {
        
         newState.data = action.data
        newState.token = action.data.token
        newState.role = action.data.result.Role
       
        console.log("new state",newState )
        return newState
    }
  
    if (action.type === "Signup") {
        state.datas = action.data
        return state
    }
    if (action.type === "inValid") {
        console.log("invalid type")
        state.datas = action.data
        return state
    }
    if (action.type === "LOGOUT") {
        newState.token = ""
        newState.role = ""
        return newState
    }
    return state;

}
export default reducer