import React from "react";

function FetchApi() {
  // const apiGet = () => {
  //   fetch("https://jobs-api.squareboat.info/api/v2/")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  return (
    <div className="App">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="row justify-content-between">
            <div class="col-6">
              <a href="/" className="btn btn-secondary ">
                Location
              </a>
            </div>

            <div class="col-6">
              <a href="/" className="btn btn-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FetchApi;
