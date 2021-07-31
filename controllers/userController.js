const Users = require("../models/users")

async function getUser(req,res) {
    let users = await Users.find({});
    console.log(users)
    res.render("userProfile/profile", {users});
}

async function getUserbyId(req,res) {
    let id = req.params.id;
    let result = await Users.findById(id);
    console.log(result);
    res.render("userProfile/userPage", {user:result});
}

async function deleteUser(req,res) {
    let id = req.params.id;
    let result = await Users.findByIdAndRemove({
        _id: id
    });
    if (!result) {
    throw new NotFoundError('user NOT_FOUND with id: ' + id);
  }

    res.redirect('/posts/index');
  return `user successfully deleted with id ${id}`;

}

async function userForm(req, res) {
    let id = req.params.id;
    let user = await Users.findById(id);
    res.render('userProfile/updateForm',{user})
}


async function updateUser(req, res) {
    console.log(req.params.id);
    try {
        let id = req.params.id;

        let update = {
            name: req.body.name,
            interest: req.body.interest,
        }

        let result = await Users.findOneAndUpdate(id, update)
        console.log(result)
        res.render("userprofile/userPage", {user:result});
        
    }
    catch (err) {
        console.log(err)
    }

}

module.exports = {
    getUserbyId,
    getUser,
    deleteUser,
    updateUser,
    userForm,
}