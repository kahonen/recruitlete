import React, { Component } from "react";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Search extends Component {
  state = {
    secretData: "",
    user: {},
    schools: []
  };

  componentDidMount() {
    this.loadSchools();
  };

  loadSchools = () => {
    API.getSchools(Auth.getToken())
    .then(res =>
      this.setState({
          secretData: res.data.message,
          user: res.data.user,
          schools: res.data
        }))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        {this.state.schools.length ? (
          <div className="row">
            <div className="offset-md-4 col-md-4">
              {this.state.schools.map((school, index) => (
                <div className="row" key={index}>
                  <h3>school {index}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  };
}

export default Search;
