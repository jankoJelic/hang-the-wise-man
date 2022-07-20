function Button({ title = "", onClick = () => {}, styles = "" }) {
  return (
    <button
      className={`bg-mainAction text-white w-full max-w-md h-10 rounded-xl hover:bg-mainLight mb-2 font-semibold ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
