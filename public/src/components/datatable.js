import React from "react";
import "./datatable.css"

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true,
      showPosition: true,
      showId: true,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  

  handleStateChange = (property) => {
    console.log("handleStateChange called!!!")
    console.log(property)

    if (property === "name") {
      this.setState({ showName: !this.state.showName });

      console.log(this.state.showName);

    } else if (property === "position") {
      this.setState({ showPosition: !this.state.showPosition });

    } else if (property === "id") {
      this.setState({ showId: !this.state.showId});
    }
  };


  render() {
    const employeedata = [
      {
        name: "Bob",
        position: "Engineer",
        id: "19837937"
      },
      {
        name: "Vandana",
        position: "Software Engineer",
        id: "26837638"
      },
      {
        name: "Joe",
        position: "Manager",
        id: "3y78373"
      },
    ]
    return (
      <div>
        <p>Toggle Data</p>
        <button onClick={() => this.handleStateChange("name")} value={2}>Name</button>
        <button onClick={() => this.handleStateChange("position")}>Position</button>
        <button onClick={() => this.handleStateChange("id")}>ID</button>

        <table>
          <tr>
            <th>Employee Name</th>

          </tr>

          {employeedata.map((employee) =>
            // filter name/position/id based on the state
            <tr>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.id}</td>
            </tr>
          )}
        </table>
      </div>

    );
  }
}

export default Counter;
