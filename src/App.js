import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";
import Card from "./components/Card";
import { connect } from "react-redux";
import {
  getCountries,
  getCountryDetail,
  getCountriesByRange,
  getCountryName,
  goBack,
  getSearchedData
} from "./actions";
import DetailPage from "./components/DetailPage";
class App extends Component {
  state = {
    darkMode: false,
    page: 0,
    filterBy: "",
    searched: false,
    searchedData: []
  };
  setDarkMode = () => {
    this.setState(state => ({ darkMode: !state.darkMode }));
  };
  getFilter = filter => {
    this.setState({ filterBy: filter, page: 0 });
  };
  handleSearch = value => {
    let searchedData = [];
    if (value === "") {
      this.setState({ searchedData, searched: false });
    } else {
      this.props.data.allcountries.map(item => {
        if (item.name.toLowerCase().includes(value)) {
          searchedData.push(item);
        }
      });
      this.setState({ searchedData, searched: true });
      this.props.getSearchedData({
        data: this.state.searchedData,
        page: 0
      });
    }
  };
  componentDidMount = async () => {
    this.props.getCountries({ page: 0 });
  };
  render() {
    console.log("main", this.state.searchedData);
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.darkMode
              ? "hsl(207, 26%, 17%)"
              : "hsl(0, 0%, 98%)",
            minHeight: "100vh"
          }}
        >
          <Navbar
            darkMode={this.state.darkMode}
            setDarkMode={this.setDarkMode}
          />
          <div className="container p-4">
            {this.props.data.countryDetail.name ? (
              <DetailPage
                darkMode={this.state.darkMode}
                countryDetail={this.props.data.countryDetail}
                borders={this.props.data.borders}
                getCountryName={this.props.getCountryName}
                goBack={this.props.goBack}
              />
            ) : (
              <>
                <div className="filters">
                  <SearchBox
                    darkMode={this.state.darkMode}
                    handleSearch={this.handleSearch}
                  />
                  <Filter
                    darkMode={this.state.darkMode}
                    filter={this.state.filterBy}
                    getCountriesByRange={this.props.getCountriesByRange}
                    getCountries={this.props.getCountries}
                    getFilter={this.getFilter}
                  />
                </div>
                <div className="my-5 d-flex justify-content-between flex-wrap">
                  {this.props.data.countries.map(item => (
                    <Card
                      data={item}
                      darkMode={this.state.darkMode}
                      getCountryDetail={this.props.getCountryDetail}
                    />
                  ))}
                </div>
                <nav
                  style={{
                    marginTop: -50
                  }}
                  className="d-flex justify-content-end"
                  aria-label="Page navigation example"
                >
                  <ul className="pagination">
                    <li
                      style={{
                        pointerEvents: this.state.page === 0 && "none",
                        opacity: this.state.page === 0 && 0.6
                      }}
                      className="page-item"
                      onClick={() =>
                        this.setState(
                          state => ({
                            page: state.page > 0 && state.page - 1
                          }),
                          () => {
                            if (this.state.searched) {
                              this.props.getSearchedData({
                                data: this.state.searchedData,
                                page: this.state.page
                              });
                            } else {
                              this.state.filterBy !== ""
                                ? this.props.getCountriesByRange({
                                    name: this.state.filterBy,
                                    page: this.state.page
                                  })
                                : this.props.getCountries({
                                    page: this.state.page
                                  });
                            }
                          }
                        )
                      }
                    >
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li
                      className="page-item"
                      style={{
                        pointerEvents: "none"
                      }}
                    >
                      <a className="page-link" href="#">
                        {this.state.page + 1}
                      </a>
                    </li>
                    <li
                      style={{
                        pointerEvents:
                          this.state.page === this.props.data.total && "none",
                        opacity:
                          this.state.page === this.props.data.total && 0.6
                      }}
                      className="page-item"
                      onClick={() =>
                        this.setState(
                          state => ({
                            page: state.page + 1
                          }),
                          () => {
                            if (this.state.searched) {
                              this.props.getSearchedData({
                                data: this.state.searchedData,
                                page: this.state.page
                              });
                            } else {
                              this.state.filterBy !== ""
                                ? this.props.getCountriesByRange({
                                    name: this.state.filterBy,
                                    page: this.state.page
                                  })
                                : this.props.getCountries({
                                    page: this.state.page
                                  });
                            }
                          }
                        )
                      }
                    >
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ loading, data }) => ({
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  getCountries: page => dispatch(getCountries(page)),
  getCountryDetail: name => dispatch(getCountryDetail(name)),
  getCountriesByRange: data => dispatch(getCountriesByRange(data)),
  getCountryName: code => dispatch(getCountryName(code)),
  goBack: () => dispatch(goBack()),
  getSearchedData: data => dispatch(getSearchedData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
