const Img = require('../models/image');

async function imageUpdate(data) {
  const result = []
  for (everyNote of data) {
    newNote = {};
    newNote.id = everyNote._id;
    newNote.title = everyNote.title;
    newNote.description = everyNote.description;
    newNote.userId = everyNote.userId;
    newNote.privateFlag = everyNote.privateFlag;
    newNote.imageData = await Img.findOne({
      _id: everyNote.imageId
    })
      .then(
        (img) => {
          return {
            mimeType: img.contentType,
            imgData: img.data
          }
        })
      .catch(
        (error) => {
          return { error: error }
        }
      );
    result.push(newNote)
  }
  return result
};

module.exports = imageUpdate;