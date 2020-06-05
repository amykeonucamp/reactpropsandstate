import React, { Component } from "react";

/*
  QUESTION: WHAT IS state?
  ANSWER:   state IS AN OBJECT THAT IS INHERITED FROM REACT.COMPONENT WHEN THE super(props) FUNCTION IS CALLED.
            YOU DEFINE state BY ADDING PROPERTIES AND VALUES TO state IN THE CONSTRUCTOR
*/

// Class component

/* 
    What does the object, props, look like in this component?

        props {
            name: null,
            randomText: null,
            howManyProps: null
        }

    How to use:
    <ClassGreetingState name="World" randomText="This is a class component with state and props." howManyProps="3" />

    Notice that state properties are not used, only props properties.


    What does the object, props, look like after calling the component above?

        props {
            name: "World",
            randomText: "This is a class component with state and props.",
            howManyProps: "3"
        }
*/
class ClassGreetingState extends Component {
  // constructor is required when there is State and/or binding event handler functions
  // when using constructor, super() function is required and the props object must be passed as an arguement to both
  constructor(props) {
    // This makes the state object property inherit the functions of the state object from React.Component
    // if this super(props) is not called, the state object will only act as a regular property in this class.
    super(props);

    // State is a built-in object property in the React Component class
    // In this state object, define properties that are to be used in this component
    this.state = {
      riddle: "What month of the year has 28 days?",
      riddleAnswer: "All of them",
    };
  }

  // render() function is required
  // this function is where the return statement lives
  render() {
    return (
      <React.Fragment>
        <h2 className="headerClass2">Class Component Example 2</h2>
        <p className="paragraphClass2">Hello {this.props.name} from Class</p>

        {/* use the properties in the state object */}
        <p>{this.state.riddle}</p>
        <p>{this.state.riddleAnswer}</p>

        <p>{this.props.randomText}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>Question: How many props are in this component?</p>
        <p>{this.props.howManyProps}</p>
      </React.Fragment>
    );
  }
}

// the export is the name of the class
export default ClassGreetingState;
