import { NoResultsContainer } from "./NoResults.style";
import { SRegButton, Sh2CardTitle } from "../styles/globalstyles";

export default function NoResults() {
  const handleClearSearch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NoResultsContainer>
      <div>
        <Sh2CardTitle>Oops!</Sh2CardTitle>
        <h3>No venues match the search term.</h3>
        <SRegButton onClick={handleClearSearch}>Try again</SRegButton>
      </div>
    </NoResultsContainer>
  );
}
