exports.getUser = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("username");
};

exports.displayForm = (req, res) => {
  res.render("form", { title: "Create username" });
};

exports.handleSubmit = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
};
