import React from "react";

class Scroll extends React.Component {
  render() {
    // children to wrap other element
    return (
      <React.Fragment>
        <div
          style={{
            overflowY: "scroll",
            border: "1px solid black",
            height: "800px",
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Scroll;
