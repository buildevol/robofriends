import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pa2">
          <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="Search Robots"
            onChange={this.props.searchChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBox;
