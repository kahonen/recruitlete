
import React, { Component } from "react";
import API from "../../utils/API";
import { ListGroup, ListGroupItem } from "mdbreact";

class Newsfeed extends Component {
  state = {
    ready: false,
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.refs.NewsfeedRef 
                   && this.setState({ ready: true, articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div ref="NewsfeedRef">
        {this.state.articles.length ? (
          <div style={{ overflow: "scroll", height: 400 }}>
            {this.state.articles.map((article, index) => (
              <ListGroup key={index}>
                <ListGroupItem href={article.link} target="_blank">
                  <div className="row">
                    <div className="col-md-3" style={{ float: "left" }}>
                      <img src={article.img} alt={`Article ${index}`} style={{ width: 220 }} />
                    </div>
                    <div className="col-md-9" style={{ float: "left" }}>
                      <h5 className="mb1">{article.title}</h5>
                      <p className="mb1">{article.summary}</p>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            ))}
          </div>
        ) : (
          <div>
            { this.state.ready && <h3>No Results to Display</h3> }
          </div>
        )}
      </div>
    );
  }
}

export default Newsfeed;
