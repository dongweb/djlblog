/**
 * Created by dd_fly on 15/7/30.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/djlblog");
module.exports = mongoose;