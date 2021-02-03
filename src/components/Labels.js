import React from "react";

export default function Labels(props) {
  return (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      Labels:
      {props.items.map((label) => (
        <span
          style={{
            backgroundColor: "#" + label.color,
            cursor: "default",
            color: "white",
            padding: 8,
            borderRadius: 25,
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {label.name.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
