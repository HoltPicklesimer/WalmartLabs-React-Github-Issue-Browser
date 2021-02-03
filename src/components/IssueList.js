import React, { useState } from "react";
import IssueItem from "./IssueItem";

export default function IssueList(props) {
  let currentPage = props.currentPage;
  let pageIndices = props.pageIndices;
  let items = props.items;

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          {items
            .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
            .map((item) => (
              <IssueItem
                issue={item}
                key={item.id}
                handleClick={props.handleClick}
              ></IssueItem>
            ))}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <a
            className="button btn btn-light"
            onClick={props.handlePageClick.bind(this, currentPage - 1)}
          >
            {"<"}
          </a>
          {[...Array(pageIndices).keys()].map((index) => (
            <a
              key={index}
              className="button btn btn-light"
              style={
                index + 1 === currentPage
                  ? { fontWeight: "bold" }
                  : { fontWeight: "normal" }
              }
              onClick={props.handlePageClick.bind(this, index + 1)}
            >
              {index + 1}
            </a>
          ))}
          <a
            className="button btn btn-light"
            onClick={props.handlePageClick.bind(this, currentPage + 1)}
          >
            {">"}
          </a>
        </div>
      </div>
    </div>
  );
}
