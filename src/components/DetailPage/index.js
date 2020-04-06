import React, { Component } from "react";
class DetailPage extends Component {
  state = {};

  componentDidMount() {
    this.props.countryDetail.borders.map(code => {
      this.props.getCountryName(code.toLowerCase());
    });
  }
  render() {
    return (
      <div
        className="content"
        style={{
          color: this.props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
        }}
      >
        <div
          className="rounded button py-2 d-flex justify-content-center"
          style={{
            backgroundColor: this.props.darkMode
              ? "hsl(209, 23%, 22%)"
              : "hsl(0, 0%, 100%)",
            color: this.props.darkMode
              ? "hsl(0, 0%, 100%)"
              : "hsl(200, 15%, 8%)",
            cursor: "pointer"
          }}
          onClick={() => this.props.goBack()}
        >
          <i className="mr-2 fa fa-long-arrow-left" aria-hidden="true"></i>
          <h6 className="m-0">Back</h6>
        </div>
        <div className="detail">
          <div>
            <img
              className="rounded-top image"
              src={this.props.countryDetail.flag}
              alt="flag"
            />
          </div>
          <div className="box">
            <h4 className="my-3" style={{ fontWeight: 600 }}>
              {this.props.countryDetail.name}
            </h4>
            <div className="detail-content">
              <div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Native Name:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.nativeName}
                  </span>
                </div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Population:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.population}
                  </span>
                </div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>Region:</span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.region}
                  </span>
                </div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Sub Region:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.subregion}
                  </span>
                </div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Capital:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.capital}
                  </span>
                </div>
              </div>
              <div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Top Level Domain:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.topLevelDomain[0]}
                  </span>
                </div>
                <div className="my-2 d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Currencies:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.currencies.map((curr, index) => {
                      if (
                        index + 1 ===
                        this.props.countryDetail.currencies.length
                      ) {
                        return curr.name;
                      } else {
                        return curr.name + ",";
                      }
                    })}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    Languages:
                  </span>
                  <span
                    className="ml-1"
                    style={{ color: "hsl(0, 0%, 52%)", fontSize: 13 }}
                  >
                    {this.props.countryDetail.languages.map((curr, index) => {
                      if (
                        index + 1 ===
                        this.props.countryDetail.languages.length
                      ) {
                        return curr.name;
                      } else {
                        return curr.name + ",";
                      }
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="borders">
              <span style={{ fontSize: 13, fontWeight: 600 }}>
                Border Countries:
              </span>
              <span
                className="d-flex flex-wrap"
                style={{ color: "hsl(0, 0%, 52%)" }}
              >
                {this.props.borders.map(name => (
                  <div
                    className="m-1 rounded button py-1 px-3"
                    style={{
                      backgroundColor: this.props.darkMode
                        ? "hsl(209, 23%, 22%)"
                        : "hsl(0, 0%, 100%)",
                      color: this.props.darkMode
                        ? "hsl(0, 0%, 100%)"
                        : "hsl(200, 15%, 8%)",
                      cursor: "pointer",
                      width: "auto"
                    }}
                  >
                    <h6 style={{ fontSize: 13 }} className="m-0">
                      {name}
                    </h6>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
