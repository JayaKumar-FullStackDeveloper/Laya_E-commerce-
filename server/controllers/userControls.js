const UsersRegistration = require("../models/authUserModel")

const userCreate = async (req, res) => {
  try {
    const saveUser = await UsersRegistration.create(req.body);
    console.log(saveUser);
    res.json({
      data: saveUser,
      message: "Data was uploaded",
    });
  } catch (error) {
    res.json({
      error: error.message,
      message: "Error while uploading",
    });
  }
}

const getallUser = async (req, res) => {
  try {

    const findAllUser = await UsersRegistration.find().sort({ _id: -1 });
    res.json({
      data: findAllUser,
      message: "Data getted",
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
}

const getuserbyId = async (req, res) => {
  try {
    const objectId = req.params.id;
    const findUserById = await UsersRegistration.findById(objectId);
    if (!findUserById || findUserById === 0) {
      res.json({
        message: "No ID available in DB",
      });
      return;
    }
    res.json({
      data: findUserById,
      message: "Data retrieved",
    });
  } catch (error) {
    res.json({
      error: error.message,
      message: "Error while getting data",
    });
  }
}

const updateOne = async (req, res) => {
  try {
    const updatevalue = req.params.id;
    const Updateone = await UsersRegistration.updateOne({ name: updatevalue }, req.body, { new: true });
    if (!Updateone) {
      return res.json({
        message: "No Data Found",
      })
    }
    res.json({
      data: Updateone,
      message: "Dataone is Updated",
    });
  } catch (error) {
    res.json({
      error: error.message,
      message: "Error while updating data",
    });
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const UpdateUser = await UsersRegistration.findByIdAndUpdate(id, req.body, { new: true });
    if (!UpdateUser || UpdateUser === 0) {
      return res.json({
        message: "No Data Found",
      })
    }
    res.json({
      data: UpdateUser,
      message: "Data Updated",
    });
  } catch (error) {
    res.json({
      error: error.message,
      message: "Error while updating data",
    });
  }
}

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const DeleteUser = await UsersRegistration.findByIdAndDelete( id );
    if (!DeleteUser) {
      return res.status(404).json({
        message: "No Data Found",
      })
    }
    res.json({
      data: DeleteUser,
      message: "Data deleted Sucessfully",
    });
  } catch (error) {
    res.json({
      error: error.message,
      message: "Error while deleteing data",
    });
  }
}

module.exports = {
  userCreate,
  getallUser,
  getuserbyId,
  updateOne,
  update,
  deleteById
}