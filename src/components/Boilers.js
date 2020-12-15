import React, { Component } from "react";
import Items from "./Items/Items";
import PropTypes from "prop-types";

class Boilers extends Component {
  render() {
    return this.props.boilers.map((boiler) => (
      <Items
        key={boiler.id}
        boiler={boiler}
        delBoiler={this.props.delBoiler}
        updateBoiler={this.props.updateBoiler}
      />
    ));
  }
}

Boilers.propTypes = {
  boilers: PropTypes.array.isRequired,
};

export default Boilers;
