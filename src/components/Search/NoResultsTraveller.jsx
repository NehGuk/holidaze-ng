import { NoResultsContainer } from "./NoResultsTraveller.style";
import { SRegButton } from "../styles/globalstyles";

export default function NoResultsTraveller() {
  const handleClearSearch = () => {
    window.location.reload();
  };

  return (
    <NoResultsContainer>
      {/* <div> */}
      <h2>Oops!</h2>
      <p>No venues match the search term.</p>
      <SRegButton onClick={handleClearSearch}>Try again</SRegButton>
      {/* </div> */}
    </NoResultsContainer>
  );
}
