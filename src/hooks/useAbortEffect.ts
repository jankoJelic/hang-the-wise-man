import { useEffect } from "react";

const useAbortEffect = (asyncFunction = () => {}, dependencies = []) => {
  useEffect(() => {
    const abortController = new AbortController();

    if (!abortController.signal.aborted) {
      asyncFunction();
    }

    return () => abortController.abort();
  }, dependencies);
};

export default useAbortEffect;
