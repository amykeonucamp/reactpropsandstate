import React from 'react';
import { jsxElement } from "./components/JSXComponent";
import FunctionGreeting, { ArrowFunctionGreeting } from "./components/FunctionComponent";
import ClassGreetingProps from "./components/ClassComponentProps";
import ClassGreetingState from "./components/ClassComponentState";
import './App.css';

function App() {
  return (
    <React.Fragment>
        <h1>Examples of Using Props and State</h1>

        {/* 
            This JSX element is in a variable.
        */}
        {jsxElement}

        <hr />

        {/*
            Function Component using standard function statement
        */}
        <FunctionGreeting name="Amy" randomText="Developing React components" answer="3" />

        <hr />

        {/* 
            Function Component using arrow function statement
        */}
        <ArrowFunctionGreeting name="Amy" randomText1="Developing React components" randomText2="Functional components do not have State." randomText3="Components are comps in nets." answer="5" />

        <hr />

        {/* 
            Class Component inheriting React.Component
        */}
        <ClassGreetingProps name="World" randomText="This is a class component with only props." howManyProps="5" riddle="What has to be broken before you can use it?" answer="An egg" />

        <hr />

        {/* 
            Class Component inheriting React.Component
        */}
        <ClassGreetingState name="World" randomText="This is a class component with state and props." howManyProps="3" />

      </React.Fragment>
  );
}

export default App;
