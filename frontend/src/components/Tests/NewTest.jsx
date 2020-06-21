import styles from "./Tests.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";


let NewTestForm =(props) =>{

    return (
        <form onSubmit={props.handleSubmit}>
            <p>Название </p> <Field name={"name"} component={"input"} />
            <p>  <button > Далее </button></p>
        </form>
    )
}
const ReduxNewTestForm = reduxForm({form: 'newTest'})(NewTestForm)

let NewTest =(props) =>{
    const onSubmit=(formData)=>{
        props.setTest(formData);
        console.log(props.test)
        props.history.push('/newquestions')
    }
    return <div className={styles.clients}>
        <h1> Новый тест </h1>
        <ReduxNewTestForm onSubmit ={onSubmit}/>
    </div>
}
export default NewTest;