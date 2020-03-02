const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageId: { type: String, required: true },
  userId: { type: String, required: true },
  privateFlag: { type: Boolean, required: true },
});

module.exports = mongoose.model('Note', noteSchema);
