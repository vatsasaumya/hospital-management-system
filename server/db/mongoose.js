var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect('mongodb+srv://dbUser:dbUser@mern-mga4p.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useFindAndModify: false,
useUnifiedTopology: true})
.then(() => console.log("MongoDB Connected.."))
.catch(err => console.log(err));

module.exports = {mongoose};
