import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restReducer } from "../reducers/restReducers";


// reducer combine and stored and it give to argument of store
const reducers=combineReducers({
    
    restaurantReducer:restReducer

})

// create middleware
const middleware=[thunk]

// create store 
const store=createStore(reducers,applyMiddleware(...middleware))

//... 3dots called spredoperator used for apply extra middleware

export default store