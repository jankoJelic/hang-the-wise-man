type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => (
  <h1 className="font-bold text-2xl sm:text-4xl text-mainText text-center mb-8">
    {text}
  </h1>
);

export default Title;
