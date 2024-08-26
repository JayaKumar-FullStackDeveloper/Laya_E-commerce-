const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModels');

const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = new Admin({ email, password });
    await admin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id , role: admin.role}, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getAdminDetails = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select('-password');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    // Ensure role is included in the response
    res.json({ id: admin._id, email: admin.email, role: admin.role });
    console.log( res.json);
    
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const logoutAdmin = (req, res) => {
  // Since JWTs are stateless, you don't need to do anything on the server-side.
  // Just ensure the client clears its token.
  res.json({ message: 'Logged out successfully' });
};

module.exports = { 
  registerAdmin,
  loginAdmin,
  getAdminDetails,
  logoutAdmin
 };
