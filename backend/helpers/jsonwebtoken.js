const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "secret";

const tokenGenerator = (data) => {
  const { id, username, email } = data;
  return jwt.sign(
    {
      id,
      username,
      email,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
