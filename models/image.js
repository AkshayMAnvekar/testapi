const mongoose = require('mongoose');

const imgSchema = mongoose.Schema({
  data: { type: Buffer, required: true},
  contentType: { type: String, required: true}
});

module.exports = mongoose.model('Img', imgSchema);
