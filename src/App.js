import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    darkMode: false
  };
  setDarkMode = () => {
    this.setState(state => ({ darkMode: !state.darkMode }));
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.darkMode
              ? "hsl(207, 26%, 17%)"
              : "hsl(0, 0%, 98%)",
            height: "100vh"
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
          </div>
        </div>
      </>
    );
  }
}

export default App;
