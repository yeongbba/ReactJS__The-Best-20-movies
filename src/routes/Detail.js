import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    let { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    let { location, history } = this.props;

    return (
      <React.Fragment>
        <h1 className="detail__title">The 20 Best Movies in Home</h1>
        <div className="detail__container">
          <img src={location.state.poster} alt={location.state.title} />
          <div className="detail__container__summary">
            <h2>{location.state.title}</h2>
            <p>{location.state.summary}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
