import React from "react";

export default function Comment(props) {
  return (
    <div
      key={props.comment.id}
      style={{
        borderTop: "1px solid lightgray",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <div className="row" style={{ marginTop: 10, marginBottom: 10 }}>
        <div className="col-2 text-right">
          <img
            className="rounded-circle"
            src={props.comment.user.avatar_url}
            width="50"
          />
        </div>
        <div className="col-10">
          <div>{props.comment.user.login}</div>
          <div>{props.parseDate(props.comment.created_at)}</div>
        </div>
      </div>
      <div>{props.comment.body}</div>
    </div>
  );
}
