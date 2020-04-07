import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StyledTheme from "./style";
import Navbar from "./components/Navbar";

import { connect } from "react-redux";
import { getCountries, getCountryDetail, getCountriesByRange } from "./actions";
import DetailPage from "./components/DetailPage";
import MainPage from "./components/MainPage";

const theme = "light";
export const ThemeContext = React.createContext(theme);

class App extends Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  };

  componentDidMount = async () => {
    this.props.getCountries();
  };
  render() {
    return (
      <Router>
        <ThemeContext.Provider value={this.state.theme}>
          <StyledTheme />
          <div
            style={{
              minHeight: "100vh",
            }}
          >
            <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} />
            <Route
              exact
              path="/"
              render={(props) => (
                <ThemeContext.Consumer>
                  {(theme) => (
                    <MainPage
                      {...props}
                      theme={theme}
                      darkMode={this.state.darkMode}
                      getCountriesByRange={this.props.getCountriesByRange}
                      getCountries={this.props.getCountries}
                      countries={this.props.data.countries}
                    />
                  )}
                </ThemeContext.Consumer>
              )}
            />
            <Route
              exact
              path="/country/:name"
              render={(props) => (
                <ThemeContext.Consumer>
                  {(theme) => (
                    <DetailPage
                      {...props}
                      theme={theme}
                      darkMode={this.state.darkMode}
                      countryDetail={this.props.data.countryDetail}
                      getCountryDetail={this.props.getCountryDetail}
                      countries={this.props.data.countries}
                      loading={this.props.loading}
                    />
                  )}
                </ThemeContext.Consumer>
              )}
            />
          </div>
        </ThemeContext.Provider>
      </Router>
    );
  }
}

const mapStateToProps = ({ loading, data }) => ({
  loading,
  data,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(getCountries()),
  getCountryDetail: (name) => dispatch(getCountryDetail(name)),
  getCountriesByRange: (data) => dispatch(getCountriesByRange(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
