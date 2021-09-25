import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          Search
          <FontAwesomeIcon className="ms-1" icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default Search;
