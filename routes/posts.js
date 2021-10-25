const express = require('express');
const postsController = require('../controllers/post.controller');
const checkAuthMiddleware = require('../middleware/check.auth');
const imageUploader = require ('../helpers/image-uploader');

const router = express.Router();

router.get('/', postsController.index);
router.get('/:id', postsController.show);
router.post('/', checkAuthMiddleware.checkAuth, imageUploader.upload.single('image'), postsController.save);
router.delete('/:id', checkAuthMiddleware.checkAuth, postsController.destroy);


module.exports = router;