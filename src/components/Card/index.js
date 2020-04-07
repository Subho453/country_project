import React from "react";

const Card = (props) => {
  return (
    <div
      className="card rounded"
      style={{
        backgroundColor:
          props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
        color:
          props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
        cursor: "pointer",
      }}
      onClick={() => {
        props.history.push(`/country/${props.data.name.toLowerCase()}`);
      }}
    >
      <img
        className="rounded-top flag"
        src={props.data.flag}
        width="100%"
        alt="flag"
      />
      <div className="p-4">
        <h5 className="mb-3" style={{ fontSize: 15, fontWeight: 900 }}>
          {props.data.name}
        </h5>
        <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
          Population:
          <span
            className="ml-1"
            style={{ color: "hsl(0, 0%, 52%)", fontSize: 11 }}
          >
            {props.data.population}
          </span>
        </div>

        <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
          Region:
          <span
            className="ml-1"
            style={{ color: "hsl(0, 0%, 52%)", fontSize: 11 }}
          >
            {props.data.region}
          </span>
        </div>
        <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
          Capital:
          <span
            className="ml-1"
            style={{ color: "hsl(0, 0%, 52%)", fontSize: 11 }}
          >
            {props.data.capital}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
