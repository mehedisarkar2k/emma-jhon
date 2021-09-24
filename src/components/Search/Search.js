import React from "react";

const Search = () => {
  return (
    <form className="d-flex align-item-center">
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control border-outline-success"
          placeholder="Search your product"
          aria-label="Search your product"
          aria-describedby="search-btn"
        />
        <button className="btn btn-success" type="button" id="search-btn">
          Button
        </button>
      </div>
    </form>
  );
};

export default Search;
