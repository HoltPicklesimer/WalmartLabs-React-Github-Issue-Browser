import React from "react";

const style = {
  border: "1px solid black",
  borderRadius: 25,
  flex: 1,
  marginBottom: 2,
  backgroundColor: "#f5f5f5",
  padding: 10,
  cursor: "pointer",
};

function IssueItem(props) {
  let issue = props.issue;

  return (
    <div
      style={style}
      onClick={props.handleClick.bind(this, props.issue)}
      className="text-left"
    >
      <div className="h5">{issue.title}</div>
      <div>Issue #{issue.number}</div>
      <div>{issue.state.toUpperCase()}</div>
    </div>
  );
}

export default IssueItem;
