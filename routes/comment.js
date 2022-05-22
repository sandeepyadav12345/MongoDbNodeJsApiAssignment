import express from 'express';
// controllers
import comment from '../controllers/comment.js';

const router = express.Router();

router.post('/:postId', comment.onCreateComment)


export default router;
