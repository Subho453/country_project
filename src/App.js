import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";
import Card from "./components/Card";

class App extends Component {
  state = {
    darkMode: false,
    data: [],
    page: 0
  };
  setDarkMode = () => {
    this.setState(state => ({ darkMode: !state.darkMode }));
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/all"
    ).then(res => res.json());
    this.setState({
      data: response.splice(this.state.page * 8, 8)
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.darkMode
              ? "hsl(207, 26%, 17%)"
              : "hsl(0, 0%, 98%)",
            height: "110vh"
          }}
        >
          <Navbar
            darkMode={this.state.darkMode}
            setDarkMode={this.setDarkMode}
          />
          <div className="container p-4">
            <div className="d-flex justify-content-between align-items-center">
              <SearchBox darkMode={this.state.darkMode} />
              <Filter darkMode={this.state.darkMode} />
            </div>
            <div className="my-5 d-flex justify-content-between flex-wrap">
              {this.state.data.map(item => (
                <Card data={item} darkMode={this.state.darkMode} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
