import React from "react";

class Card extends React.Component {
  render() {
    // destructuring
    const { name, email, id } = this.props;
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
        {/* The usage of React Fragment instead of div for better readability
        similar to semantic html https://reactjs.org/docs/fragments.html
        http://blog.jmes.tech/react-fragment-and-semantic-html/ */}
        <React.Fragment>
          <h2>{name}</h2>
          <p>{email}</p>
        </React.Fragment>
      </div>
    );
  }
}

export default Card;
