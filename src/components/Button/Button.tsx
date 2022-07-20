function Button({ title = "", onClick = () => {} }) {
  return (
    <button
      className="bg-mainAction text-white w-full h-10 rounded-xl hover:bg-mainLight mb-2 font-semibold"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
