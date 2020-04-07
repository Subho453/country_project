import React from "react";

const SearchBox = (props) => {
  return (
    <div className="rounded searchbar px-3 py-2 d-flex align-items-center">
      <i className="ml-3 fa fa-search" aria-hidden="true"></i>
      <input
        style={{
          backgroundColor:
            props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
          color:
            props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        }}
        className="ml-4"
        placeholder="Search for a country..."
        onChange={(e) => props.handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
