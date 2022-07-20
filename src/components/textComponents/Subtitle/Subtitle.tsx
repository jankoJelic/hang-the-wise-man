type Props = {
  text: string;
};

const Subtitle = ({ text }: Props) => (
  <h3 className="font-semibold text-mainText">{text}</h3>
);

export default Subtitle;
