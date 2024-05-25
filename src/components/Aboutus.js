import UserClass from "./UserClass";
import React from "react";
import UserClass1 from "./UserClass1";

class Aboutus extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }
  async componentDidMount() {
    console.log("Parent DidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <div>This is About Us Page</div>
        <UserClass name={"Harish"} location={"Pulivendula"} />
        {/* <UserClass1 name={"Harish1"} location={"Pulivendula1"}/> */}
        {/* <UserClass name={"Harish2"} location={"Pulivendula2"}/> */}
      </div>
    );
  }
}

// const Aboutus = () => {
//   return (
//     <div>
//       <div>This is About Us Page</div>
//       <UserClass name={"Harish"} location={"Pulivendula"}/>
//       <UserClass name={"Harish1"} location={"Pulivendula1"}/>
//       <UserClass name={"Harish2"} location={"Pulivendula2"}/>
//     </div>
//   );
// };

export default Aboutus;
