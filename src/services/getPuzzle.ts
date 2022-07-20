const getPuzzle = async () => {
  const response = await fetch("http://api.quotable.io/random");

  return response;
};

export default getPuzzle;
