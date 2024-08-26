const express = require('express');
const { registerAdmin, loginAdmin, getAdminDetails ,logoutAdmin } = require('../controllers/adminController');
const { authenticate } = require('../middleware/adminMiddleware');
const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
router.get('/me', authenticate, getAdminDetails); // Protect this route with middleware

module.exports = router;
