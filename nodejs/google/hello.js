exports.helloWorld = (req, res) => {
  let message = 'Hello World!';
  res.status(200).send(message);
};
