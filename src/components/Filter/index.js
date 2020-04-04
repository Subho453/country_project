import React, { Component } from "react";

const Regions = [
  {
    key: 1,
    value: "Africa"
  },
  {
    key: 2,
    value: "Americas"
  },
  {
    key: 3,
    value: "Asia"
  },
  {
    key: 4,
    value: "Europe"
  },
  {
    key: 5,
    value: "Oceania"
  }
];
class Filter extends Component {
  state = {
    clicked: false,
    selected: null
  };
  selectBtn = [];
  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  handleOutsideClick = e => {
    if (this.selectBtn["select"].contains(e.target)) {
      this.setState(state => ({ clicked: !state.clicked }));
    } else if (this.selectBtn["options"].contains(e.target)) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  };
  render() {
    console.log(this.state.selected);
    return (
      <div>
        <div
          ref={node => (this.selectBtn["select"] = node)}
          className="rounded filter d-flex align-items-center justify-content-around"
          style={{
            backgroundColor: this.props.darkMode
              ? "hsl(209, 23%, 22%)"
              : "hsl(0, 0%, 100%)",
            color: this.props.darkMode
              ? "hsl(0, 0%, 100%)"
              : "hsl(200, 15%, 8%)",
            cursor: "pointer"
          }}
        >
          <h6 className="m-0">Filter by Region</h6>
          <i className="ml-3 fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        <div ref={node => (this.selectBtn["options"] = node)}>
          {this.state.clicked && (
            <div
              className="mt-1 rounded shadow position-absolute"
              style={{
                width: 200,
                backgroundColor: this.props.darkMode
                  ? "hsl(209, 23%, 22%)"
                  : "hsl(0, 0%, 100%)",
                color: this.props.darkMode
                  ? "hsl(0, 0%, 100%)"
                  : "hsl(200, 15%, 8%)"
              }}
            >
              {Regions.map(filter => (
                <div
                  className="py-2 px-3 rounded"
                  style={{
                    cursor: "pointer",
                    backgroundColor: this.props.darkMode
                      ? this.state.selected === filter.key
                        ? "hsl(0, 0%, 100%)"
                        : "hsl(209, 23%, 22%)"
                      : this.state.selected === filter.key
                      ? "hsl(209, 23%, 22%)"
                      : "hsl(0, 0%, 100%)",
                    color: this.props.darkMode
                      ? this.state.selected === filter.key
                        ? "hsl(200, 15%, 8%)"
                        : "hsl(0, 0%, 100%)"
                      : this.state.selected === filter.key
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(200, 15%, 8%)"
                  }}
                  onClick={() => {
                    this.setState({ selected: filter.key });
                  }}
                >
                  {filter.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Filter;
