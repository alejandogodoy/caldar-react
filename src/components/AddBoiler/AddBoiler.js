import React, { Component } from "react";
import "./AddBoiler.css";

export class AddBoiler extends Component {
  state = {
    idType: "",
    startTime: "",
    endTime: "",
    monthlyHours: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBoiler(this.state);
    this.setState({
      idType: "",
      startTime: "",
      endTime: "",
      monthlyHours: "",
    });
  };
  render() {
    return (
      <form className="addForm" onSubmit={this.onSubmit}>
        <input
          className="inputStyle"
          type="text"
          name="idType"
          style={{ flex: "1", padding: "5px" }}
          placeholder="Add ID type of Boiler"
          value={this.state.idType}
          onChange={this.onChange}
          required
        />
        <input
          className="inputStyle"
          type="time"
          name="startTime"
          style={{ flex: "1", padding: "5px" }}
          value={this.state.startTime}
          onChange={this.onChange}
          required
        />
        <input
          className="inputStyle"
          type="time"
          name="endTime"
          style={{ flex: "1", padding: "5px" }}
          value={this.state.endTime}
          onChange={this.onChange}
          required
        />
        <input
          className="inputStyle"
          type="number"
          name="monthlyHours"
          style={{ flex: "1", padding: "5px" }}
          placeholder="Add Monthly Hours"
          value={this.state.monthlyHours}
          onChange={this.onChange}
          required
        />
        <input className="btnSubmit" type="submit" value="Add new boiler" />
      </form>
    );
  }
}

export default AddBoiler;
