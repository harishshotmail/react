import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [
//         React.createElement("div",  {id: "child1"},
//             [
//                 React.createElement("h1",  {}, "I'm an h1 tag"),
//                 React.createElement("h2",  {}, "I'm an h2 tag")
//             ]
//         ),
//         React.createElement("div",  {id: "child2"},
//             [
//                 React.createElement("h1",  {}, "I'm an h1 tag"),
//                 React.createElement("h2",  {}, "I'm an h2 tag")
//             ]
//         )
//     ]
// );

const heading = (
  <h1 className="head" tabIndex="5">
    This is React
  </h1>
);

//component

const HeadingComponent = () => {
  return (
    <div id="container1">
      <h1>This Functional Component 1 JSX</h1>
      <HeadingComponent2 />
    </div>
  );
};
const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="heading">This Functional component 2 JSX</h1>
    {/* <HeadingComponent /> */}
  </div>
);

console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
