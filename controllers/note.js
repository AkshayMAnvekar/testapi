const Note = require('../models/note');
const Img = require('../models/image');
const imageUpdate = require('../functions/imageUpdate');


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

exports.createNote = (req, res, next) => {
  if (!res.locals.authenticated) {
    res.status(401).json({
      error: new Error('Unauthorized request!')
    });
  } else {
    const img = new Img({
      fileName: req.file.originalname.split(' ').join('_'),
      data: req.file.buffer,
      contentType: req.file.mimetype
    });
    img.save().then(
      () => {
        const note = new Note({
          title: req.body.title,
          description: req.body.description,
          imageId: img.id,
          userId: req.body.userId,
          privateFlag: req.body.privateFlag
        });
        console.log("Note Created", note);
        note.save().then(
          () => {
            res.status(201).json({
              message: 'Post saved successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
};

exports.getOneNote = (req, res, next) => {
  Note.findOne({
    _id: req.params.id
  }).then(
    (note) => {
      res.status(200).json(note);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyNote = (req, res, next) => {
  if (!res.locals.authenticated) {
    res.status(401).json({
      error: new Error('Unauthorized request!')
    });
  } else { 
    const note = new Note({
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
    Note.updateOne({_id: req.params.id}, note).then(
      () => {
        res.status(201).json({
          message: 'Note updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
};

exports.deleteNote = (req, res, next) => {
  if (!res.locals.authenticated) {
    res.status(401).json({
      error: new Error('Unauthorized request!')
    });
  } else { 
    Note.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
};

exports.getNotes = async (req, res, next) => {
  const privateFilter = (res.locals.authenticated === true) ? [true, false] : [false];
  const pageNo = (req.query.page)? parseInt(req.query.page) : 1;
  const rowSize = (req.query.size)? parseInt(req.query.size) : 10;
  const skipVal = (pageNo-1)*rowSize;
  if (req.query.search || req.body.search) {
    const searchQuery = req.query.search || req.body.search
    Note.find({ title: { $regex: searchQuery, $options: 'i' }, privateFlag: { $in: privateFilter } }, null, { limit: rowSize, skip: skipVal }
    ).then(
      async (notes) => { 
        res.status(200).json(await imageUpdate(notes));
      }
    ).catch(
      (error) => {
        console.log(error);
        res.status(400).json({
          error: error
        });
      }
    );
  } else {
    Note.find({ privateFlag: { $in: privateFilter } }, null, { limit: rowSize, skip: skipVal }
    ).then(
      async (notes) => {
        res.status(200).json(await imageUpdate(notes));
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
};

