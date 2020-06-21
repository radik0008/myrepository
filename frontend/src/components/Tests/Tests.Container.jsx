import {connect} from "react-redux";
import {getTests} from "../../redux/testing-reducer"
import React from "react";
import axios from "axios";
import Test from "./Test";

class API extends React.Component{

    componentDidMount() {

        axios.get("http://localhost:3001/api/getTests/")
            .then(res => {
                this.props.getTests(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.log("error in request", err);
            });
    }

    render(){
        return <Test tests={this.props.tests} />
    }
}

let mapStateToProps =(state) =>{
    return {
        tests: state.testing.tests
    }
}
let mapDispatchToProps =(dispatch) =>{
    return {
        getTests:(data)=>{
            dispatch(getTests(data));
        }
    }
}


const TestsContainer = connect(mapStateToProps,mapDispatchToProps)(API);
export default TestsContainer;