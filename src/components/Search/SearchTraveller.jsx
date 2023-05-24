import PropTypes from "prop-types";
import { useState } from "react";

import { SearchInputArea } from "./SearchTraveller.style";

export default function SearchTraveller({ onChildData }) {
  const [search, setSearch] = useState("");

  const handleSearchTerms = (event) => {
    setSearch("Search...");
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onChildData(searchTerm);
  };

  return (
    <SearchInputArea>
      <div>
        <input onChange={handleSearchTerms} placeholder={`Search venues...${search}`} />
      </div>
      <div></div>
    </SearchInputArea>
  );
}

SearchTraveller.propTypes = {
  onChildData: PropTypes.func.isRequired,
};
