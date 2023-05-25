import { useEffect } from "react";

export default function useScrollTopAlways() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
