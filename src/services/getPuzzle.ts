const getPuzzle = async () => {
  const response = await fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .catch((err) => {});

  return response;
};

export default getPuzzle;
