const express = require('express');
const app = express();

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use("/posts", postsRoute);
app.use("/user", userRoute);

module.exports = app