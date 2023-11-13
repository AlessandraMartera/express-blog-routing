const express = require('express');
const router = express.Router();
// collego il json dei posts dentro la carte db a post.js
const posts = require("../db/db.js");
// Collego il controller
const postsController = require("../controllers/posts.js");

router.get('/', postsController.index);

router.get('/:slug', postsController.show);
module.exports = router;

