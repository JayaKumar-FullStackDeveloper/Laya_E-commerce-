const express = require('express');
const router = express.Router();
const {
  registerUser,
  verifyOTP,
  signin,
  forgotpassword,
  resetpassword,
  resendOTP,
  getUserDetails
} = require('../controllers/userController');
const { protectUser } = require('../middleware/userMiddleware');

// Route to register a new user
router.post('/usercreate', registerUser);

// Route to verify OTP for user registration
router.post('/verify-otp', verifyOTP);

// Route to sign in a user
router.post('/signin', signin);

// Route to handle forgot password requests
router.post('/forgot-password', forgotpassword);

// Route to reset the password
router.post('/reset-password/:token', resetpassword);

// Route to resend OTP to the user’s email
router.post('/resend-otp', resendOTP);


router.get('/me', protectUser, getUserDetails); // Protect this route with middleware

module.exports = router;
