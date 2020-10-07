import React, { Component } from "react";
import SearchBox from "../SearchBox";
import Filter from "../Filter";
import Card from "../Card";
import { ThemeContext } from "../../App";

class MainPage extends Component {
  state = {
    page: 0,
    filterBy: "",
    searched: false,
    searchedData: [],
  };
  getFilter = (filter) => {
    this.setState({ filterBy: filter, page: 0 });
  };
  handleSearch = (value) => {
    let searchedData = [];
    if (value === "") {
      this.setState({ searchedData, searched: false });
    } else {
      this.props.countries.map((item) => {
        if (item.name.toLowerCase().includes(value.toLowerCase().trim())) {
          searchedData.push(item);
        }
      });
      this.setState({ searchedData, searched: true });
    }
  };
  render() {
    const total = Math.ceil(this.props.countries.length / 8);
    const countries = [
      ...(this.state.searched ? this.state.searchedData : this.props.countries),
    ].splice(this.state.page * 8, 8);
    return (
      <div className="container p-4">
        <div className="filters">
          <ThemeContext.Consumer>
            {(theme) => (
              <SearchBox theme={theme} handleSearch={this.handleSearch} />
            )}
          </ThemeContext.Consumer>
          <ThemeContext.Consumer>
            {(theme) => (
              <Filter
                theme={theme}
                darkMode={this.props.darkMode}
                getCountriesByRange={this.props.getCountriesByRange}
                getCountries={this.props.getCountries}
                getFilter={this.getFilter}
              />
            )}
          </ThemeContext.Consumer>
        </div>
        <div className="my-5 d-flex justify-content-between flex-wrap">
          {countries.map((item) => (
            <ThemeContext.Consumer>
              {(theme) => (
                <Card
                  theme={theme}
                  data={item}
                  darkMode={this.props.darkMode}
                  history={this.props.history}
                  getCountryDetail={this.props.getCountryDetail}
                />
              )}
            </ThemeContext.Consumer>
          ))}
        </div>
        <nav
          style={{
            marginTop: -50,
          }}
          className="d-flex justify-content-end"
          aria-label="Page navigation example"
        >
          <ul className="pagination" style={{ border: "none" }}>
            <li
              style={{
                pointerEvents: this.state.page === 0 && "none",
                opacity: this.state.page === 0 && 0.6,
                cursor: "pointer",
              }}
              className="page-item"
              onClick={() =>
                this.setState((state) => ({
                  page: state.page > 0 && state.page - 1,
                }))
              }
            >
              <div
                className="page-link"
                aria-label="Previous"
                style={{
                  backgroundColor:
                    this.props.theme === "dark"
                      ? "hsl(209, 23%, 22%)"
                      : "hsl(0, 0%, 100%)",
                  color:
                    this.props.theme === "dark"
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(200, 15%, 8%)",
                }}
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </div>
            </li>
            <li
              className="page-item"
              style={{
                pointerEvents: "none",
              }}
            >
              <div
                className="page-link"
                style={{
                  backgroundColor:
                    this.props.theme === "dark"
                      ? "hsl(209, 23%, 22%)"
                      : "hsl(0, 0%, 100%)",
                  color:
                    this.props.theme === "dark"
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(200, 15%, 8%)",
                }}
              >
                {this.state.page + 1}
              </div>
            </li>
            <li
              style={{
                pointerEvents: this.state.page === total && "none",
                opacity: this.state.page === total && 0.6,
                cursor: "pointer",
              }}
              className="page-item"
              onClick={() =>
                this.setState((state) => ({
                  page: state.page + 1,
                }))
              }
            >
              <div
                className="page-link"
                aria-label="Next"
                style={{
                  backgroundColor:
                    this.props.theme === "dark"
                      ? "hsl(209, 23%, 22%)"
                      : "hsl(0, 0%, 100%)",
                  color:
                    this.props.theme === "dark"
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(200, 15%, 8%)",
                }}
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainPage;
