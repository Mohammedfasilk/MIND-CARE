const User = require('../Models/Usermodel');
const bcrypt = require('bcrypt');
exports.UserRegister =  async (req, res) => {
    try {
      const {
        firstname,
        lastname,
        email,
        mobile,
        place,
        city,
        district,
        state,
        nationality,
        pincode,
        role,
        password
      } = req.body.userData;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        firstname,
        lastname,
        email,
        mobile,
        place,
        city,
        district,
        state,
        nationality,
        pincode,
        role,
        password:hashedPassword,
      });
  
      await user.save();
      res.status(201).json(user);
  
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  }