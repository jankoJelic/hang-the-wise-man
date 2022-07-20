import Button from "../../components/Button";
import Input from "../../components/Input";

const NameForm = () => {
  return (
    <form className="flex flex-col p-8 border-solid border mt-10 rounded-xl bg-white items-center w-72 sm:w-96">
      <h3>Tell us your name!</h3>
      <Input />
      <Button title="Enter" />
    </form>
  );
};

export default NameForm;
