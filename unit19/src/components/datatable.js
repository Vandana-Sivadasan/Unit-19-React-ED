import React from "react";
import "./datatable.css"

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true,
      showPosition: true,
      showId: true,
      sortOrder: 'DSC',
      employees: [
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
      ],
    };
    // This binding is necessary to make `this` work in the callback
    this.handleStateChange = this.handleStateChange.bind(this);
    //this.sortEmployees = this.sortEmployees.bind(this);
  }

  //Create state to manage sorting ASC or DSC
  //Create state to manage sorted array of employees
  //Create function to handle sorting of employees
  //Create button to call the sort function

  // sortEmployees = () => {
  //   //write logic to rearrange order of employees array
  //   //Save new order of employee array to state
  //   let employees = this.state.employees;
  //   employees.sort(function(a,b){return a.id - b.id});
  //   this.setState({ employees : employees})
  // }

  // sortEmployees() 

    //Function for updating sort order of employees
    // ASC or DSC
  

  handleStateChange = (property) => {
    if (property === "name") {
      this.setState({ showName: !this.state.showName });
    } else if (property === "position") {
      this.setState({ showPosition: !this.state.showPosition });
    } else if (property === "id") {
      this.setState({ showId: !this.state.showId });
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

          {this.state.employees.map((employee) =>
            // filter name/position/id based on the state
            <tr>
              <td style={{ display: (this.state.showName ? `block` : `none`) }}>{employee.name}</td>
              <td style={{ display: (this.state.showPosition ? `block` : `none`) }}>{employee.position}</td>
              <td>{employee.id}</td>
            </tr>
          )}
        </table>
      </div>

    );
  }
}

export default Counter;
