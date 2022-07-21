import { useEffect } from "react";
import { setIsLoading } from "store/appSlice";
import store from "store/store";

const useAbortEffect = (asyncFunction = () => {}, dependencies = []) => {
  useEffect(() => {
    store.dispatch(setIsLoading(true));

    const abortController = new AbortController();

    if (!abortController.signal.aborted) {
      asyncFunction();
    }

    store.dispatch(setIsLoading(false));

    return () => abortController.abort();
  }, dependencies);
};

export default useAbortEffect;
