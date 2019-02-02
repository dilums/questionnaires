import React, { Component } from "react";
import { connect } from "react-redux";

import { getSet, sendLog } from "../../actions/qaActions";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  // Get the first question using the id in the url
  componentDidMount() {
    this.props.getSet({ type: "question", id: this.props.match.params.id });
  }

  // Check if there is convesation in the history and if the the conversation is finished,
  // send the history data to the server
  componentDidUpdate() {
    const { finish, history } = this.props.qa;
    if (finish && history.length > 1) {
      this.props.sendLog(history);
    }
  }

  // Change selected value when the user clicks on radio buttons
  handleChange = e => {
    this.setState({ selected: e.target.value });
  };

  // Get the next QA set using the the selected anwser
  onSubmit(e) {
    e.preventDefault();
    if (this.state.selected !== null) {
      this.props.getSet({ type: "anwser", id: this.state.selected });
    }
  }

  render() {
    const { data, loading, error, finish } = this.props.qa;
    let content;
    if (loading) {
      content = (
        <div className="loading">
          <i className="fa fa-cog fa-spin fa-2x" />
        </div>
      );
    } else if (error) {
      content = (
        <h2 className="text-center">
          Sorry, There was an error while processing. Please reload
        </h2>
      );
    } else if (finish) { // Display the last response in the conversation
      const { message } = this.props.qa;
      content = <h3 className="question-legend">{message}</h3>;
    } else {
      const { qusestion, anwsers } = data;
      content = (
        <form onSubmit={this.onSubmit}>
          <legend className="question-legend">{qusestion}</legend>
          {anwsers.map(anwser => (
            <div key={anwser.id} className="option mb-2">
              <input
                id={`customRadio1-${anwser.id}`}
                name="customRadio"
                className="hide_input"
                type="radio"
                value={anwser.id}
                onChange={this.handleChange}
              />
              <label
                className="form-label"
                htmlFor={`customRadio1-${anwser.id}`}
              >
                <i className="fa fa-check-circle" />
                &nbsp; {anwser.text}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="btn btn-confirm btn-block mt-3 text-uppercase"
          >
            Confirm
          </button>
        </form>
      );
    }

    return (
      <div className="container mt-4">
        <div className="dialogue-box">{content}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  qa: state.qa
});
export default connect(
  mapStateToProps,
  { getSet, sendLog }
)(Item);
