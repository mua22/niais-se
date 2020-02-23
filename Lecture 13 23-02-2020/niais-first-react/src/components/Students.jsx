import React, { Component } from "react";
class Students extends Component {
  state = { students: ["Zeshan", "Hamza", "Ali"] };
  handleSort = () => {
    this.setState({ students: this.state.students.sort() });
  };
  render() {
    return (
      <div className="students">
        <button onClick={this.handleSort}>Sort</button>
        <ul>
          {this.state.students.map((std, index) => (
            <li key={index}>{std}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Students;
