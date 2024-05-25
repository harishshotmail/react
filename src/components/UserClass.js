import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name will come here",
      location: "Location will come here",
    };
    console.log(this.props.name, "Child Constructor");
  }
  async componentDidMount() {
    const fetchData = await fetch(
      "https://api.github.com/users/harishshotmail"
    );
    const data = await fetchData.json();
    console.log("data", data);
    console.log(this.props.name, "Child DidMount");
    this.setState(data);
  }
  componentDidUpdate() {
    console.log(this.props.name, "Child DidUpdate");
  }
  render() {
    const { name, location } = this.props;
    console.log(name, "Child Render");
    return (
      <div className="user-card">
        <h2>Name: {name}-name </h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
