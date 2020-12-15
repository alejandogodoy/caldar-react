import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Items.css";
import { BiPencil } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

export class Items extends Component {
  state = { ...this.props.boiler, edit: false };

  ulStyle = () => {
    return {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      backgroundColor: "#e1e2e3",
    };
  };
  liStyle = () => {
    return {
      float: "left",
      display: "block",
      width: "17%",
      color: "#000",
      fontWeight: "bold",
      fontSize: 13,
      textAlign: "center",
      padding: "45px 10px 45px",
      borderBottom: "1px solid #333",
    };
  };
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  saveChanges = () => {
    this.toggleEdit();
    this.props.updateBoiler(this.state);
  };
  render() {
    const { id } = this.props.boiler;
    if (this.state.edit) {
      return (
        <ul style={this.ulStyle()}>
          <input
            className="inputEdit"
            type="text"
            name="id"
            value={this.state.id}
            readOnly
          />
          ,
          <input
            className="inputEdit"
            type="text"
            name="idType"
            placeholder=" Add ID Type"
            value={this.state.idType.isRequired}
            onChange={this.onChange}
          />
          ,
          <input
            className="inputEdit"
            type="time"
            name="startTime"
            placeholder=" Add Start Time"
            value={this.state.startTime.isRequired}
            onChange={this.onChange}
          />
          ,
          <input
            className="inputEdit"
            type="time"
            name="endTime"
            placeholder=" Add End Time"
            value={this.state.endTime.isRequired}
            onChange={this.onChange}
          />
          ,
          <input
            className="inputEdit"
            type="number"
            name="monthlyHours"
            placeholder=" Add Monthly Hours"
            value={this.state.monthlyHours.isRequired}
            onChange={this.onChange}
          />
          ,
          <div>
            <button onClick={this.toggleEdit} style={Btn}>
              <FcCancel />
            </button>
            <button onClick={this.saveChanges} style={Btn}>
              <AiOutlineCheckCircle />
            </button>
          </div>
        </ul>
      );
    }

    return (
      <ul style={this.ulStyle()}>
        <li style={this.liStyle()}>{this.props.boiler.id}</li>
        <li style={this.liStyle()}>{this.props.boiler.idType}</li>
        <li style={this.liStyle()}>{this.props.boiler.startTime}</li>
        <li style={this.liStyle()}>{this.props.boiler.endTime}</li>
        <li style={this.liStyle()}>{this.props.boiler.monthlyHours}</li>
        <div>
          <button onClick={this.props.delBoiler.bind(this, id)} style={Btn}>
            <GoTrashcan />
          </button>
          <button onClick={this.toggleEdit} style={Btn}>
            <BiPencil/>
          </button>
        </div>
      </ul>
    );
  }
}
Items.propTypes = {
  boiler: PropTypes.object.isRequired,
};
const Btn = {
  backgroundColor: "#073e6e",
  hoverBackgroundColor: "red",
  color: "#fff",
  border: "none",
  width: "30px",
  height: "30px",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "50%",
  float: "right",
  marginLeft: "8px",
  marginRight: "20px",
  marginTop: "20px",
};

export default Items;
