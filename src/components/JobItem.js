import React, { Component } from "react";

export class JobItem extends Component {
  render() {
    let { title, description, imageUrl } = this.props;
    return (
      <div className="card p-2">
        <img src={imageUrl} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href="{url}"
            target="_blank"
            className="col-5 btn-sm btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default JobItem;
