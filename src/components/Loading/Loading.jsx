import { LoaderArea } from "./Loading.style";
import { BounceLoader } from "react-spinners";

export default function Loading() {
  return (
    <LoaderArea>
      <BounceLoader color="#5879A2" />
    </LoaderArea>
  );
}
