import { NoResultsContainer } from "./NoResults.style";
import { SRegButton } from "../styles/globalstyles";

export default function NoResults() {
  const handleClearSearch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NoResultsContainer>
      <div>
        <h2>Oops!</h2>
        <p>No venues match the search term.</p>
        <SRegButton onClick={handleClearSearch}>Try again</SRegButton>
      </div>
    </NoResultsContainer>
  );
}
