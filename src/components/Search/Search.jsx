import PropTypes from "prop-types";
import { useState } from "react";
/* import hero from "../../assets/hero.jpg"; */
/* import { SimgHero } from "./Search.style"; */

import { SearchContainer, SearchInputArea } from "./Search.style";

/* import logoname from "../../assets/logolight-name.png"; */

export default function Search({ onChildData, scrollToVenuesList }) {
  const [search, setSearch] = useState("");

  const handleSearchTerms = (event) => {
    setSearch("Search...");
    const searchTerm = event.target.value;
    setSearch(searchTerm);
    onChildData(searchTerm);
  };

  const handleButtonClick = () => {
    scrollToVenuesList();
  };
  return (
    <SearchContainer>
      {/* <SimgHero src={hero} /> */}

      {/* <img src={logoname} /> */}

      <SearchInputArea>
        <div>
          <h1>Your journey starts here!</h1>
          <input onChange={handleSearchTerms} placeholder={`Search venues...${search}`} />
          <button onClick={handleButtonClick}>Go</button>
        </div>
        <div></div>
      </SearchInputArea>
    </SearchContainer>
  );
}

Search.propTypes = {
  onChildData: PropTypes.func.isRequired,
  scrollToVenuesList: PropTypes.func.isRequired,
};
