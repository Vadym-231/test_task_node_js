const express = require('express')
const app = express();
let dotenv = require('dotenv').config();
const port = process.env.PORT;
const { getPostByIdEndpoint, getPostsEndpoint } = require('./src/controllers/posts');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})
app.get('/posts', getPostsEndpoint);
app.get('/posts/:id', getPostByIdEndpoint);

app.listen(port, () => {
    console.log(`REST READY TO REQUEST ON PORT: ${port}`)
})