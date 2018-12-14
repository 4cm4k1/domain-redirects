const { send } = require('micro');

module.exports = async (req, res) => {
  res.setHeader('Location', `https://anthony.codes/${req.url.substr(1)}`);
  send(res, 301);
};
