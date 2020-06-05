import React, { Component } from "react";

// Class component

/* 
  What does the object, props, look like in this component?

    props {
      name: null,
      randomText: null,
      riddle: null,
      answer: null
    }

  How to use:
  <ClassGreetingProps name="World" randomText="This is a class component with only props." howManyProps="5" riddle="What has to be broken before you can use it?" answer="An egg" />

  What does the object, props, look like after calling the component above?

    props {
      name: "World",
      randomText: "This is a class component with only props.",
      howManyProps: "5",
      riddle: "What has to be broken before you can use it?"
      answer: "An egg"
    }
*/
class ClassGreetingProps extends Component {
  /*
    Constructor is not necessary when State is not defined and/or there aren't any binding event handler functions
    Notice that there isn't a props object parameter.
    The reason is because the props object property is inherited from React.Component class.
    So you do not need to declare props.
  */

  render() {
    return (
      <React.Fragment>
        <h2 className="headerClass1">Class Component Example 1</h2>
        <p className="paragraphClass1">Hello {this.props.name} from Class</p>
        <p>{this.props.randomText}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>Question: How many props are in this component?</p>
        <p>{this.props.howManyProps}</p>
        <p>{this.props.riddle}</p>
        <p>{this.props.answer}</p>
      </React.Fragment>
    );
  }
}

// the export is the name of the class
export default ClassGreetingProps;
