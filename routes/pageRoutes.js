import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.get('/', pageController.getHome);
router.get('/about', pageController.getAbout);
router.get('/contact', pageController.getContact);
router.get('/greet', pageController.getGreeting);

router.post('/data', pageController.handlePostData);

export default router;