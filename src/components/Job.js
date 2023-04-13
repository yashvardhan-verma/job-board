import React, { Component } from "react";
import JobItem from "./JobItem";

export class Job extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=89d25e48679b47f6871d327815e2a4be";
    fetch(url, {
      method: 'GET',
      redirect: 'follow'
    }).then(response => response.json())
    .then(result => {
      console.log(result.articles)
      this.setState({ articles: result.articles });
      })
    .catch(error => console.log('error', error))
    // console.log(data)
    // let parsedData = data.json();
    // this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h2> News Monkey - Top Headlines </h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                <JobItem
                  title={e.title ? e.title.slice(0, 45) : ""}
                  description={e.description ? e.description.slice(0, 88) : ""}
                  imageUrl={e.urlToImage ? e.urlToImage : ""}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Job;
