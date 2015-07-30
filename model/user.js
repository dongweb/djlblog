/**
 * Created by dd_fly on 15/7/30.
 */
var mongoose = require('../db');
var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
},{collection:'user'});

//定义模型,用来执行与数据库的操作
var userModel = mongoose.model('User',userSchema);

function User(user){
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
}



module.exports = User;