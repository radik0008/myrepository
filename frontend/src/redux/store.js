import {combineReducers, createStore} from "redux";
import testingReducer from "./testing-reducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
   testing: testingReducer,
    form: formReducer
})
let store = createStore(reducers);

export default store;