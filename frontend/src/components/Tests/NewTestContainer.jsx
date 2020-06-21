import {connect} from "react-redux";
import {setTest} from "../../redux/testing-reducer"
import React from "react";
import NewTest from "./NewTest";

let mapStateToProps =(state) =>{
    return {
        test: state.testing.test
    }
}

let mapDispatchToProps =(dispatch) =>{
    return {
       setTest:(test)=>{
            dispatch(setTest(test));
        }
    }
}


const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(NewTest);
export default ClientsContainer;