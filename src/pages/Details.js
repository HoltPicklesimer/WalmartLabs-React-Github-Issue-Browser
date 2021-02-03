import React from "react";
import IssueDetail from "../components/IssueDetail";

export default function Details(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <button
            className="button btn btn-primary"
            style={{ marginBottom: 20 }}
            onClick={props.handleClick.bind(this, null)}
          >
            {"<"}- Back to Issues
          </button>
          <h3>Issue Details:</h3>
          <IssueDetail issue={props.issue}></IssueDetail>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
