import React, { useState, useEffect } from "react";
import Assignees from "./Assignees";
import Comments from "./Comments";
import Labels from "./Labels";

export default function IssueDetail(props) {
  const [comments, setComments] = useState([]);
  let issue = props.issue;
  let closed_at = <div></div>;

  useEffect(() => {
    if (issue?.comments_url) {
      fetch(issue.comments_url)
        .then((res) => res.json())
        .then(
          (result) => {
            setComments(result);
          },

          (error) => {
            console.log("There was an error obtaining the result.");
            setComments(["An error occurred: " + error]);
          }
        );
    }
  });

  function parseDate(dateTime) {
    let date = new Date(dateTime);
    return date.toDateString() + " " + date.toLocaleTimeString();
  }

  if (issue.closed_at) {
    closed_at = <div>Closed On {parseDate(issue.closed_at)}</div>;
  }

  return (
    <div className="row">
      <div className="col-md-3 text-center">
        <div>
          <img
            className="rounded-circle"
            src={issue.user.avatar_url}
            width="80%"
            style={{ maxWidth: 100 }}
          />
        </div>
        Owner: {issue.user.login}
      </div>
      <div className="col-md-8">
        <div className="h5">{issue.title}</div>
        <div>Issue #{issue.number}</div>
        <Labels items={issue.labels}></Labels>
        <div>{issue.state.toUpperCase()}</div>
        <div hidden={issue.locked === false}>LOCKED</div>
        <a href={issue.html_url}>View in GitHub</a>
        <div>Created On {parseDate(issue.created_at)}</div>
        <div>Updated On {parseDate(issue.updated_at)}</div>
        {closed_at}
        <Assignees items={issue.assignees}></Assignees>
        <div style={{ marginTop: 10 }}>{issue.body}</div>
        <h5 style={{ marginTop: 20 }}>Comments:</h5>
        <Comments items={comments} parseDate={parseDate}></Comments>
      </div>
    </div>
  );
}
