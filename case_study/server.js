require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// ── Connect to MongoDB Community Edition (local) ──────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅  Connected to MongoDB Community Edition - studentDB'))
  .catch(err  => console.error('❌  MongoDB Error:', err.message));

// ── Routes ────────────────────────────────────────────────────────────────
app.use('/api/students', require('./routes/students'));

app.get('/', (req, res) => {
  res.json({ message: '🎓 Student Records API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('🚀  Server running at http://localhost:' + PORT);
});
