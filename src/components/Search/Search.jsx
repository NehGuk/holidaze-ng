import PropTypes from "prop-types";
import { useState } from "react";
/* import hero from "../../assets/hero.jpg"; */
/* import { SimgHero } from "./Search.style"; */

import { SearchContainer, SearchInputArea } from "./Search.style";

export default function Search({ onChildData }) {
  const [search, setSearch] = useState("");

  const handleSearchTerms = (event) => {
    setSearch("Search...");
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onChildData(searchTerm);
  };

  return (
    <SearchContainer>
      {/* <SimgHero src={hero} /> */}
      <h1>Holidaze</h1>

      <SearchInputArea>
        <h2>Let us explore!</h2>
        <input onChange={handleSearchTerms} placeholder={`Search our venues...${search}`} />
      </SearchInputArea>
    </SearchContainer>
  );
}

Search.propTypes = {
  onChildData: PropTypes.func.isRequired,
};
