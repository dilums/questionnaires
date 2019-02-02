import React from "react";
import { Link } from "react-router-dom";

const ListItem = props => {
  const { text, id } = props.question;
  return (
    <Link to={`/conversation/${id}`} className="btn-q btn-block mt-3">
      {text}
    </Link>
  );
};

export default ListItem;
