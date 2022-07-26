import useWindowSize from "hooks/useWindowsSize";

type Props = {
  children: React.ReactNode;
};
const GradientBackground: React.FC<Props> = ({ children }) => {
  const { width, height } = useWindowSize();

  return (
    <main
      style={{ minWidth: width, minHeight: height }}
      className="flex flex-col items-center pt-10 bg-gradient-to-br from-white to-mainExtraLight"
    >
      {children}
    </main>
  );
};

export default GradientBackground;
