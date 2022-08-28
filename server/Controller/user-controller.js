const userModel = require("../schema/user-schema");
const addUser = async (req, res) => {

  try {
    const userCreated = await userModel.create(req.body);
    console.log(userCreated);
    if (userCreated) {
      res.send("data added succesfully");
    }
  } catch (err) {
    res.send(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const allData = await userModel.find({});
    // console.log(allData)
    if (allData) {
      res.json(allData);
    }
  } catch (err) {
    res.send({ message: err.message });
  }
};

//

const getUser = async (req, res) => {
  console.log(req.params.id);

  try {
    const allData = await userModel.findById(req.params.id);

    if (allData) {
      res.json(allData);
    }
  } catch (err) {
    res.send({ message: err.message });
  }
};
//

const editUser = async (req, res) => {
  console.log("edituser backend");
  let updateduser = req.body;

  console.log(req.params.id);
  try {
    const updated = await userModel.updateOne(
      { _id: req.params.id },
      updateduser
    );

    if (updated.acknowledged) {
      res.send("data updated");
    }
  } catch (error) {
    res.json({ message: err.message });
  }
};

//

const deleteUser = async (req, res) => {
  console.log(req.params.id);
  try {
    const deleted = await userModel.deleteOne({ _id: req.params.id });

    if (deleted.acknowledged) {
      res.send("deleted successfully");
    }
  } catch (error) {
    res.json({ message: err.message });
  }
};

module.exports = { addUser, getUsers, getUser, editUser, deleteUser };
