import React from "react";
import IssueList from "../components/IssueList";

export default function Issues(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-left">
          <h2 className="">Organization: {props.organization}</h2>
          <h2 className="">Repo: {props.repo}</h2>
          <h3 className="">Issues:</h3>
          <IssueList
            items={props.items}
            handleClick={props.handleClick}
            handlePageClick={props.handlePageClick}
            currentPage={props.currentPage}
            pageIndices={props.pageIndices}
          ></IssueList>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
