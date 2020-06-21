import {connect} from "react-redux";
import {saveTest, setQuestions} from "../../redux/testing-reducer"
import React from "react";
import NewQuestions from "./NewQuestions";

let mapStateToProps =(state) =>{
    return {
        test: state.testing.test,
        questions: state.testing.questions
    }
}

let mapDispatchToProps =(dispatch) =>{
    return {
        setQuestions:(test)=>{
            dispatch(setQuestions(test));
        },
        saveTest:(test)=>{
            dispatch(saveTest(test));
        }
    }
}


const ClientsContainer = connect(mapStateToProps,mapDispatchToProps)(NewQuestions);
export default ClientsContainer;