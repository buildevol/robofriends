import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends React.Component {
  // State usually live in the parent component
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json(); // return the json
      })
      .then((users) => {
        this.setState({ robots: users }); // set the state to the returned json
      });
  }

  // When using this keyword in new methods on a component we should use arrow function so this refers to where it is created.
  onSearchChange = (event) => {
    // Always use this.setState to set state.
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <React.Fragment>
          <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots} />
              </ErrorBoundary>
            </Scroll>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
