import React, { Component } from "react";
import Header from "./components/layout/Header";
import Boilers from "./components/Boilers";
import AddBoilers from "./components/AddBoiler/AddBoiler";
import mockBoilers from "./mocks/mockBoilers.json";
import "./App.css";

class App extends Component {
  state = { mockBoilers };

  // Delete boiler
  delBoiler = (id) => {
    this.setState({
      mockBoilers: [
        ...this.state.mockBoilers.filter((boiler) => boiler.id !== id),
      ],
    });
  };

  updateBoiler = (boilerUpdated) => {
    this.setState({
      mockBoilers: [
        ...this.state.mockBoilers.map((boiler) => {
          if (boiler.id === boilerUpdated.id) {
            boiler = boilerUpdated;
          }
          return boiler;
        }),
      ],
    });
  };

  //Add Boiler
  addBoiler = ({ idType, startTime, endTime, monthlyHours }) => {
    const newBoiler = {
      id: Math.floor(Math.random() * 101),
      idType,
      startTime,
      endTime,
      monthlyHours,
    };
    this.setState({ mockBoilers: [...this.state.mockBoilers, newBoiler] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Boilers
            boilers={this.state.mockBoilers}
            delBoiler={this.delBoiler}
            updateBoiler={this.updateBoiler}
          />
           <AddBoilers addBoiler={this.addBoiler} />
        </div>
      </div>
    );
  }
}

export default App;
