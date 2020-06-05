import React from "react";

/*
  QUESTION: WHAT IS props?
  ANSWER:   props IS AN OBJECT IN THE FUNCTION COMPONENT PARAMETER
            YOU DEFINE props BY ADDING PROPERTIES TO props WHEN YOU CREATE YOUR COMPONENT
*/

// standard function
/* 
  What does the object, props, look like in this component?

    props {
      name: null,
      randomText: null,
      answer: null
    }
    
  How to use:
  <FunctionGreeting name="World" randomText="Developing React components" answer="3" />
  
  What does the object, props, look like after calling the component above?

    props {
      name: "World",
      randomText: "Developing React components",
      answer: "3"
    }
*/
function FunctionGreeting(props) {
  return (
    <React.Fragment>
      <h2 className="headerFunction1">Function Component Example 1</h2>
      <p className="paragraphFunction1">Hello {props.name} from Function</p>
      <p>{props.randomText}</p>
      <p>Question: How many props are in this component?</p>
      <p>{props.answer}</p>
    </React.Fragment>
  );
}

// the export is the name of the function
export default FunctionGreeting;

// arrow function
// the export is different because the return value is in a variable, ArrowFunctionGreeting
// note that the variable starts with an uppercase because it will be used as a JSX element

/* 
  What does the object, props, look like in this component?

    props {
      name: null,
      randomText1: null,
      randomText2: null,
      randomText3: null,
      answer: null
    }

  How to use:
  <ArrowFunctionGreeting name="World" randomText1="Developing React components" randomText2="Functional components do not have State" randomText3="Components are comps in nets." answer="5" />

  What does the object, props, look like after calling the component above?

    props {
      name: "World",
      randomText1: "Developing React components",
      randomText2: "Functional components do not have State",
      randomText3: "Components are comps in nets.",
      answer: "5"
    }
*/
export const ArrowFunctionGreeting = (props) => {
  return (
    <React.Fragment>
      <h2 className="headerFunction2">Function Component Example 2</h2>
      <p className="paragraphFunction1">Hello {props.name} from Arrow Function</p>
      <p>{props.randomText1}</p>
      <p>{props.randomText2}</p>
      <p>{props.randomText3}</p>
      <p>Question: How many props are in this component?</p>
      <p>{props.answer}</p>
    </React.Fragment>
  );
};
