import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { connect } from "react-redux";
import { setDropdown } from "../redux/actions/bagActions";
class Layouts extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main onClick={() => this.props.setDropDown("close")}>
          {this.props.children}
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDropDown: (isActive) => dispatch(setDropdown(isActive)),
  };
};

export default connect(null, mapDispatchToProps)(Layouts);
