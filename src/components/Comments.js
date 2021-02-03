import React from "react";
import Comment from "./Comment";

export default function Comments(props) {
  return (
    <div>
      {props.items.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          parseDate={props.parseDate}
        ></Comment>
      ))}
    </div>
  );
}
