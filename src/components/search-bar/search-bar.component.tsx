import React from "react";

import "./search-bar.styles.css";

export const SearchBar = (props: any) => (
  <div className="search">
    <input
      className="search-bar"
      type="search"
      placeholder="please type title"
      onChange={props.onSearchChange}
    />
    <input
      className="search-button"
      type="submit"
      value="Search movie"
      onClick={props.onSearchSubmitted}
    />
  </div>
);
