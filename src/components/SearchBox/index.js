import React from "react";

const SearchBox = props => {
  return (
    <div
      className="rounded searchbar px-3 py-2 d-flex align-items-center"
      style={{
        backgroundColor: props.darkMode
          ? "hsl(209, 23%, 22%)"
          : "hsl(0, 0%, 100%)",
        color: props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
      }}
    >
      <i className="ml-3 fa fa-search" aria-hidden="true"></i>
      <input
        style={{
          backgroundColor: props.darkMode
            ? "hsl(209, 23%, 22%)"
            : "hsl(0, 0%, 100%)",
          color: props.darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
        }}
        className="ml-4"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBox;
