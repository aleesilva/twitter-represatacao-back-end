const express = require('express'),
mongoose = require('mongoose'),
app = express(),
server = require('http').Server(app),
io = require('socket.io')(server),
cors = require('cors');


// mongoose.connect("mongodb://alesonfranca:jotknwxr7447@ds335275.mlab.com:35275/twiiter_clone",{
//     useNewUrlParser:true,
// })


mongoose.connect("mongodb://localhost:27017/twitter_clone",{
    useNewUrlParser: true
});


app.use( (req,res,next) => {req.io = io; return next();});


app.use(express.json());
app.use(cors());
app.use(require('./routes'));
server.listen(3000, () => {
    console.log('Server started on port 1000');
});