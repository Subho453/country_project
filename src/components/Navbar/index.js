import React from "react";

const Navbar = props => {
  return (
    <div
      className="shadow-sm"
      style={{
        backgroundColor: props.darkMode
          ? "hsl(209, 23%, 22%)"
          : "hsl(0, 0%, 100%)",
        color: props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
      }}
    >
      <div className="container p-3 d-flex justify-content-between align-items-center">
        <h3 className="title m-0">Where in the world?</h3>
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => props.setDarkMode()}
        >
          <i className="fa fa-moon-o" aria-hidden="true"></i>
          <h6 className="mode mb-0 ml-2">
            {props.darkMode ? "Light Mode" : "Dark Mode"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
