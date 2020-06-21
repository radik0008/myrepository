import {connect} from "react-redux";
import {deleteAnswer, setAnswers, setAnswersTrue, UpdateAnswers} from "../../redux/testing-reducer"
import React from "react";
import NewAnswers from "./NewAnswers";
import {withRouter} from "react-router-dom";

let mapStateToProps =(state) =>{
    return {
        questions: state.testing.questions,
        answers: state.testing.answers
    }
}

let mapDispatchToProps =(dispatch) =>{
    return {
        setAnswers:(answers)=>{
            dispatch(setAnswers(answers));
        },
        setAnswersTrue:(id)=>{
            dispatch(setAnswersTrue(id));
        },
        deleteAnswer:(id)=>{
            dispatch(deleteAnswer(id));
        },
        UpdateAnswers:(id)=>{
            dispatch(UpdateAnswers(id));
        }
    }
}


const AnswersContainer = connect(mapStateToProps,mapDispatchToProps)(withRouter(NewAnswers));
export default AnswersContainer;