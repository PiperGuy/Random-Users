import React from "react";

const SearchBox = ({  searchChange }) => {
  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="Search members by name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
