import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer/reducer.js'

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const token=localStorage.getItem("token")
const data=localStorage.getItem("data")

const role = localStorage.getItem("role")
const initialState = {
    data: [],
    token:'',
    role:''

};
if(token)
{
    initialState.token=token;
    initialState.role=role;
    initialState.data=data
}


const store = createStore(reducer,initialState, enhancer)
export default store;
