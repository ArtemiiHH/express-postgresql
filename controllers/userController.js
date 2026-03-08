exports.getUserName = (req, res) => {
  console.log("usernames will be logged here - wip");
};

exports.displayForm = (req, res) => {
  res.render("form");
};

exports.handleSubmit = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
