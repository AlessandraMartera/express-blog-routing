const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
// configuro i file statici
app.use(express.static("public"));

const port = process.env.PORT || 3000;

// controllerts
const home = require("./controllers/home.js");
// const posts = require("./controllers/posts.js");
// routes
const routerPosts = require('./routers/posts.js');

// app.get("/", home.index);
// app.get("/posts", posts.index);
app.use("/posts", routerPosts);



/*
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog! da app.js</h1>');
   })
*/
app.listen(port, () => {
 console.log(`Server partito su porta http://localhost:${port}`)
})
