import React from "react";

const style = {
  paddingLeft: 100,
  marginBottom: 10,
};

export default function Header(props) {
  return (
    <div className="navbar border-bottom" style={style}>
      <h2 className="navbar-brand">GitHub Issue Browser</h2>
    </div>
  );
}
