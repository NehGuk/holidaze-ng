import PropTypes from "prop-types";
import { useState } from "react";

export default function Search({ onChildData }) {
  const [search, setSearch] = useState("");

  const handleSearchTerms = (event) => {
    setSearch("Search...");
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onChildData(searchTerm);
  };

  return (
    <div>
      <h2>Search component</h2>
      <input onChange={handleSearchTerms} placeholder={`Search...${search}`} />
    </div>
  );
}

Search.propTypes = {
  onChildData: PropTypes.func.isRequired,
};
