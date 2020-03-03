const Note = require('../models/note');
const Img = require('../models/image');
const fs = require('fs');

exports.createNote = (req, res, next) => {
  const note = new Note({
    title: req.body.title,
    description: req.body.description,
    imageId: req.body.imageId,
    userId: req.body.userId,
    privateFlag: req.body.privateFlag
  });
  console.log("Note Created",note);
  
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
};

exports.deleteNote = (req, res, next) => {
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
};

exports.getAllNotes = (req, res, next) => {
  console.log(res.locals);
  var privateFilter = (!res.locals.authenticated) ? false : ''
  var searchQuery = (req.query.search) ? { $regex: req.query.search, $options: 'i' } : {} 
  Note.find({ title: searchQuery, privateFlag: privateFilter }
  ).then(
    (notes) => {
      res.status(200).json(notes);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.test = (req, res, next) => {
  const img = new Img({
    fileName: req.file.originalname.split(' ').join('_'),
    data: Buffer.from(req.file.buffer),
    contentType: req.file.mimetype
  });
  console.log("Image added Created",img);
  console.log("Image added Created",req.headers);
  img.save().then(
    () => {
      res.status(201).json({
        message: 'Image saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
 };