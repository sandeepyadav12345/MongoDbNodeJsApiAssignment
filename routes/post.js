import express from 'express';
// controllers
import post from '../controllers/post.js';

const router = express.Router();

router
  .get('/', post.onGetAllPosts)
  .post('/', post.onCreatePost)
   .get('/nearestpost', post.onGetPostByNearest)
   .delete('/ownpost', post.onDeletePostById)

export default router;
