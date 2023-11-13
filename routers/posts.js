const express = require('express');
const router = express.Router();
// collego il json dei posts dentro la carte db a post.js
const posts = require("../db/db.js");
// Collego il controller
const postsController = require("../controllers/posts.js");

router.get('/', postsController.index);

router.get('/create', postsController.create);

router.get('/:slug', postsController.show);

router.get('/:slug/download', postsController.download);

module.exports = router;

