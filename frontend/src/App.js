import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header";
import TestsContainer from "./components/Tests/Tests.Container";
import NewTestContainer from "./components/Tests/NewTestContainer"
import NewQuestionsContainer from "./components/Tests/NewQuestionsContainer"
import NewAnswersContainer from "./components/Tests/NewAnswersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='content'>

        <Route path='/tests' component = {TestsContainer} />
          <Route path='/newTest' component = {NewTestContainer} />
          <Route path='/newquestions' component = {NewQuestionsContainer} />
          <Route path='/question/:questionId/answers' component = {NewAnswersContainer} />
      </div>
    </div>
  );
}

export default App;
