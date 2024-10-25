const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/form_sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create a schema and model for the form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model('FormData', formSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request from form
app.post('/submit', async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const { name, email, message } = req.body;
    const newFormData = new FormData({ name, email, message });
    await newFormData.save();
    console.log('Data saved successfully');
    res.status(200).send('Form data saved');
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send('Error saving form data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
