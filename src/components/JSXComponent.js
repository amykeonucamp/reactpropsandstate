import React from "react";

/*
  QUESTION: CAN YOU USE PROPS IN A JSX EXPRESSION?
  ANSWER:   NO. 
            YOU CAN USE A VARIABLE INSIDE THE JSX BY WRAPPING IT INSIDE OF CURLY BRACES
*/

// JSX element is in a variable, jsxElement
// export the variable to be able to import
/* 
  How to use:
  { jsxElement }
*/

// variable
let name = "World";

export const jsxElement = (
  <React.Fragment>
    <h2 className="headerJsx">JSX Element Component</h2>

    {/* use the variable inside of curly braces */}
    <p className="paragraphJsx">Hello {name} from JSX</p>
  </React.Fragment>
);
