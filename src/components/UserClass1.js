import React from "react";

class UserClass1 extends React.Component {
  constructor() {
    super();
    console.log("Child2 Constructor");
  }
  componentDidMount() {
    console.log("Child2 Did Mount");
  }
  componentDidUpdate() {
    console.log("Child2 DidUpdate");
  }
  render() {
    console.log("Child2 Render");
    return (
      <div>
        <div>This is UserClass 1 </div>
      </div>
    );
  }
}

export default UserClass1;
