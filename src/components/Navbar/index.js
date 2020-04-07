import React from "react";

const Navbar = (props) => {
  return (
    <div className="shadow-sm">
      <div className="container p-3 d-flex justify-content-between align-items-center">
        <h3 className="title m-0">Where in the world?</h3>
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => props.toggleTheme()}
        >
          <i className="fa fa-moon-o" aria-hidden="true"></i>
          <h6 className="mode mb-0 ml-2">
            {props.theme === "light" ? "Dark Mode" : "Light Mode"}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
