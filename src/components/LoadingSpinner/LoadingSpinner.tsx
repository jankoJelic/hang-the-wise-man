import BackdropOverlay from "components/BackdropOverlay";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const LoadingSpinner = () => {
  const visible = useSelector((state: RootState) => state.appState.isLoading);
  console.log(visible);
  if (!visible) return <></>;

  return (
    <BackdropOverlay>
      <Spinner className="bg-transparent" />
    </BackdropOverlay>
  );
};

export default LoadingSpinner;