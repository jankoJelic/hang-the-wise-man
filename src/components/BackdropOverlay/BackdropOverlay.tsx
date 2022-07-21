type Props = {
  children: React.ReactNode;
  className?: string;
};
const BackdropOverlay: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`flex fixed inset-0 left-0 w-screen h-screen
   bg-mainText bg-opacity-60 items-center justify-center shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default BackdropOverlay;
