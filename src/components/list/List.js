import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getList } from "../../actions/listActions";

class List extends Component {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    const { data, loading, error } = this.props.list;
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
    } else {
      content = data.map((category_item, index) => (
        <div className="card my-3" key={index}>
          <h3 className="card-header text-center text-uppercase category-topic">
            {category_item.category}
          </h3>
          <div className="card-body">
            {category_item.questions.map(question => (
              <ListItem key={question.id} question={question} />
            ))}
          </div>
        </div>
      ));
    }
    return (
      <div className="container mt-4">
        <h1 className="text-capitalize text-center mb-4 text-slanted list-topic">
          to start the questionnaire please select a question from the following
        </h1>
        {content}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.list
});
export default connect(
  mapStateToProps,
  { getList }
)(List);
