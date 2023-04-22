const express = require('express');
const session = require('express-session');

const app = express();

// In-memory user store (not suitable for production)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Set up Express session
app.use(
  session({
    secret: 'your secret',
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware to check if a user is logged in
function isLoggedIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send('You must be logged in to access this page');
  }
}

// Routes
app.get('/', (req, res) => {
  res.send('Home page');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

app.get('/dashboard', isLoggedIn, (req, res) => {
  res.send(`Welcome, ${req.session.user.username}!`);
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('An error occurred while logging out');
    } else {
      res.redirect('/');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
