const router = require('express').Router();
const User   = require('../models/User');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: 'No user' });

  const passOk = await bcrypt.compare(password, user.hash);
  if (!passOk) return res.status(401).json({ error: 'Bad password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});



// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, password, name } = req.body;

    // 1) check for required fields
    if (!username || !password || !name) {
      return res
        .status(400)
        .json({ error: 'Username, password and name are all required.' });
    }

    // 2) see if user already exists
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(409).json({ error: 'Username already in use.' });
    }

    // 3) hash the incoming password
    const hash = await bcrypt.hash(password, /* saltRounds */ 10);

    // 4) create & save new user
    const newUser = await User.create({ email, name, hash });

    // 5) optionally auto-login: sign a JWT
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 6) send back token + any user info you want client to have
    res.json({
      error: '',
      user: { id: newUser._id, email: newUser.email, name: newUser.name },
      token
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});


module.exports = router;
