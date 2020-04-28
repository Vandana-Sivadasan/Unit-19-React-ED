import React from "react";
import "./datatable.css"

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: true,
      showPosition: true,
      showId: true,
      sortOrder: false,
      employees: [
        {
          name: "Bob",
          position: "Engineer",
          id: "319837937"
        },
        {
          name: "Vandana",
          position: "Software Engineer",
          id: "26837638"
        },
        {
          name: "Tom",
          position: "Manager",
          id: "5671878373"
        },
        {
          name: "Sarah",
          position: "Manager",
          id: "93261878373"
        },
        {
          name: "Jill",
          position: "Manager",
          id: "722381878373"
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

  toggleSort = () => {
    console.log("Toggle Sort Function Called!!!");
    this.setState({ sortOrder: !this.state.sortOrder });

    let employees = this.state.employees;

    if (this.state.sortOrder === false) {
      employees = employees.sort(function (a, b) { return a.id - b.id });
    } else {
      employees = employees.sort(function (a, b) { return b.id - a.id });
    }


    this.setState({ employees: employees })
  }


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
        name: "Tom",
        position: "Manager",
        id: "3y78373"
      },
      {
        name: "Sarah",
        position: "Manager",
        id: "3y78373"
      },
      {
        name: "Jill",
        position: "Engineer",
        id: "3y78373"
      },

    ]

    return (
      <div>
        <div>
          <p className="Toggle Data" style={{ textAlign: `center` }}></p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              Name
            </div>
            <div className="col-sm">
              Position
            </div>
            <div className="col-sm">
              ID
            </div>
          </div>
        </div>

          <button onClick={() => this.handleStateChange("name")}>Name</button>
          <button onClick={() => this.handleStateChange("position")}>Position</button>
          <button onClick={() => this.handleStateChange("id")}>ID</button>
          <br />
          <button onClick={() => this.toggleSort()}>Sort ID's ASC / DSC</button>


          <table>
            <tr>
              <th>Employee Name</th>

            </tr>

            {this.state.employees.map((employee) =>
              // filter name/position/id based on the state
              <tr>
                <td style={{ display: (this.state.showName ? `block` : `none`) }}>{employee.name}</td>
                <td style={{ display: (this.state.showPosition ? `block` : `none`) }}>{employee.position}</td>
                <td style={{ display: (this.state.showId ? `block` : `none`) }}>{employee.id}</td>
              </tr>
            )}
          </table>
        </div>
        )
  }; 
}

export default Counter;
