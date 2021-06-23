const axios = require("axios");

// GET ALL USERS
exports.homeRoute = (req, res)=>{
  //Make a get request ti /api/user

  axios.get("http://localhost:3000/api/users")
  .then(function(response){
    res.render("index", {
      users: response.data
    });
  })
  .catch(err=>{
    res.send(err);
  })
}


//ADD USER
exports.add_user = (req, res)=>{
  res.render("add_user")
}

//UPATE USER
exports.update_user = (req, res)=>{
  axios.get("http://localhost:3000/api/users", {
    params:{
      id:req.query.id
    }
  })
  .then(function(userdata){
    res.render("update_user", {
      user: userdata.data
    })
  })
  .catch(err =>{
    res.send(err);
  })
}
