import { LoaderArea } from "./LoadingForm.style";
import { BeatLoader } from "react-spinners";

export default function LoadingForm() {
  return (
    <LoaderArea>
      <div>
        <BeatLoader color="#5879A2" />
      </div>
    </LoaderArea>
  );
}
