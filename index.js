const { send } = require('micro');

module.exports = async (req, res) => {
  res.setHeader('Location', 'https://anthony.codes');
  send(res, 301);
};
