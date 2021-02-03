import React from "react";

export default function Assignees(props) {
  return (
    <div>
      Assigned to:
      {props.items.map((assignee) => (
        <div
          key={assignee.id}
          style={{
            margin: 10,
          }}
        >
          <img
            className="rounded-circle"
            src={assignee.user.avatar_url}
            width="20"
            alt={assignee.user.login}
          />
          {assignee.user.login}
        </div>
      ))}
    </div>
  );
}
