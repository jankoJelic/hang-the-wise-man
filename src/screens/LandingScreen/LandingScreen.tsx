import NameForm from "../../containers/NameForm";

const LandingScreen = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl sm:text-4xl text-mainText text-center">
        Welcome, wise man!
      </h1>
      <NameForm />
    </div>
  );
};

export default LandingScreen;
