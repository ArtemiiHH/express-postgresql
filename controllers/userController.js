const getUserName = (req, res) => {
  console.log("usernames will be logged here - wip");
};

const displayForm = (req, res) => {
  res.render("index");
};

const handleSubmit = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};

module.exports = {
  getUserName,
  displayForm,
  handleSubmit,
};
