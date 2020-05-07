import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    if (false) {
      throw new Error("Hello");
    }
    const cardArray = this.props.robots.map((user, index) => {
      return (
        //   Loop should have a unique key in React so the virtual dom knows which to remove easily Note: The key should be something that does not change
        <Card
          key={this.props.robots[index].id}
          id={this.props.robots[index].id}
          name={this.props.robots[index].name}
          email={this.props.robots[index].email}
        />
      );
    });
    return <div>{cardArray}</div>;
  }
}

export default CardList;
