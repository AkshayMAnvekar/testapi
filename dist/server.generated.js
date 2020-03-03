module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controllers/note.js":
/*!*****************************!*\
  !*** ./controllers/note.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Note = __webpack_require__(/*! ../models/note */ \"./models/note.js\");\n\nexports.createNote = (req, res, next) => {\n  const note = new Note({\n    title: req.body.title,\n    description: req.body.description,\n    imageId: req.body.imageId,\n    userId: req.body.userId,\n    privateFlag: req.body.privateFlag\n  });\n  console.log(\"Note Created\", note);\n  note.save().then(() => {\n    res.status(201).json({\n      message: 'Post saved successfully!'\n    });\n  }).catch(error => {\n    res.status(400).json({\n      error: error\n    });\n  });\n};\n\nexports.getOneNote = (req, res, next) => {\n  Note.findOne({\n    _id: req.params.id\n  }).then(note => {\n    res.status(200).json(note);\n  }).catch(error => {\n    res.status(404).json({\n      error: error\n    });\n  });\n};\n\nexports.modifyNote = (req, res, next) => {\n  const note = new Note({\n    _id: req.params.id,\n    title: req.body.title,\n    description: req.body.description,\n    imageUrl: req.body.imageUrl,\n    price: req.body.price,\n    userId: req.body.userId\n  });\n  Note.updateOne({\n    _id: req.params.id\n  }, note).then(() => {\n    res.status(201).json({\n      message: 'Note updated successfully!'\n    });\n  }).catch(error => {\n    res.status(400).json({\n      error: error\n    });\n  });\n};\n\nexports.deleteNote = (req, res, next) => {\n  Note.deleteOne({\n    _id: req.params.id\n  }).then(() => {\n    res.status(200).json({\n      message: 'Deleted!'\n    });\n  }).catch(error => {\n    res.status(400).json({\n      error: error\n    });\n  });\n};\n\nexports.getAllNotes = (req, res, next) => {\n  Note.find().then(notes => {\n    res.status(200).json(notes);\n  }).catch(error => {\n    res.status(400).json({\n      error: error\n    });\n  });\n};\n\nexports.test = (req, res, next) => {\n  console.log(req);\n  res.status(200).json({\n    message: 'Recieved!'\n  });\n};\n\n//# sourceURL=webpack:///./controllers/note.js?");

/***/ }),

/***/ "./controllers/user.js":
/*!*****************************!*\
  !*** ./controllers/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nconst User = __webpack_require__(/*! ../models/user */ \"./models/user.js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nexports.signup = (req, res, next) => {\n  bcrypt.hash(req.body.password, 10).then(hash => {\n    const user = new User({\n      email: req.body.email,\n      password: hash\n    });\n    user.save().then(() => {\n      res.status(201).json({\n        message: 'User added successfully!'\n      });\n    }).catch(error => {\n      res.status(500).json({\n        error: error\n      });\n    });\n  });\n};\n\nexports.login = (req, res, next) => {\n  console.log('test', req.body);\n  User.findOne({\n    email: req.body.email\n  }).then(user => {\n    if (!user) {\n      return res.status(401).json({\n        error: new Error('User not found!')\n      });\n    }\n\n    bcrypt.compare(req.body.password, user.password).then(valid => {\n      if (!valid) {\n        return res.status(401).json({\n          error: new Error('Incorrect password!')\n        });\n      }\n\n      const token = jwt.sign({\n        userId: user._id\n      }, 'RANDOM_TOKEN_SECRET', {\n        expiresIn: '24h'\n      });\n      res.status(200).json({\n        userId: user._id,\n        token: token\n      });\n    }).catch(error => {\n      res.status(500).json({\n        error: error\n      });\n    });\n  }).catch(error => {\n    res.status(500).json({\n      error: error\n    });\n  });\n};\n\n//# sourceURL=webpack:///./controllers/user.js?");

/***/ }),

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nmodule.exports = (req, res, next) => {\n  try {\n    const token = req.headers.authorization.split(' ')[1];\n    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');\n    const userId = decodedToken.userId;\n\n    if (req.body.userId && req.body.userId !== userId) {\n      throw 'Invalid user ID';\n    } else {\n      next();\n    }\n  } catch {\n    res.status(401).json({\n      error: new Error('Invalid request!')\n    });\n  }\n};\n\n//# sourceURL=webpack:///./middleware/auth.js?");

/***/ }),

/***/ "./middleware/multer-config.js":
/*!*************************************!*\
  !*** ./middleware/multer-config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const multer = __webpack_require__(/*! multer */ \"multer\");\n\nconst MIME_TYPES = {\n  'image/jpg': 'jpg',\n  'image/jpeg': 'jpg',\n  'image/png': 'png'\n};\nconst storage = multer.diskStorage({\n  destination: (req, file, callback) => {\n    callback(null, 'images');\n  },\n  filename: (req, file, callback) => {\n    const name = file.originalname.split(' ').join('_');\n    const extension = MIME_TYPES[file.mimetype];\n    callback(null, name + Date.now() + '.' + extension);\n  }\n});\nmodule.exports = multer({\n  storage: storage\n}).single('image');\n\n//# sourceURL=webpack:///./middleware/multer-config.js?");

/***/ }),

/***/ "./models/note.js":
/*!************************!*\
  !*** ./models/note.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst noteSchema = mongoose.Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  imageId: {\n    type: String,\n    required: true\n  },\n  userId: {\n    type: String,\n    required: true\n  },\n  privateFlag: {\n    type: Boolean,\n    required: true\n  }\n});\nmodule.exports = mongoose.model('Note', noteSchema);\n\n//# sourceURL=webpack:///./models/note.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst uniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nconst userSchema = mongoose.Schema({\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  }\n});\nuserSchema.plugin(uniqueValidator);\nmodule.exports = mongoose.model('User', userSchema);\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./routes/note.js":
/*!************************!*\
  !*** ./routes/note.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nconst auth = __webpack_require__(/*! ../middleware/auth */ \"./middleware/auth.js\");\n\nconst multer = __webpack_require__(/*! ../middleware/multer-config */ \"./middleware/multer-config.js\");\n\nconst noteCtrl = __webpack_require__(/*! ../controllers/note */ \"./controllers/note.js\");\n\nrouter.get('/', auth, noteCtrl.getAllNotes);\nrouter.post('/', auth, noteCtrl.createNote);\nrouter.post('/test', multer, noteCtrl.test);\nrouter.get('/:id', auth, noteCtrl.getOneNote);\nrouter.put('/:id', auth, noteCtrl.modifyNote);\nrouter.delete('/:id', auth, noteCtrl.deleteNote);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/note.js?");

/***/ }),

/***/ "./routes/user.js":
/*!************************!*\
  !*** ./routes/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nconst userCtrl = __webpack_require__(/*! ../controllers/user */ \"./controllers/user.js\");\n\nrouter.post('/signup', userCtrl.signup);\nrouter.post('/login', userCtrl.login);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/user.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst noteRoutes = __webpack_require__(/*! ../routes/note */ \"./routes/note.js\");\n\nconst userRoutes = __webpack_require__(/*! ../routes/user */ \"./routes/user.js\");\n\nconst app = express();\napp.disable(\"X-Powered-By\");\nmongoose.connect('mongodb+srv://anv:IPTiGtk3bPsMxAk7@adb-2mbax.mongodb.net/test?retryWrites=true&w=majority', {\n  useUnifiedTopology: true,\n  useNewUrlParser: true,\n  useCreateIndex: true\n}).then(() => {\n  console.log('Successfully connected to MongoDB Atlas!');\n}).catch(error => {\n  console.log('Unable to connect to MongoDB Atlas!');\n  console.error(error);\n});\napp.use((req, res, next) => {\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');\n  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');\n  next();\n});\napp.use(bodyParser.json());\napp.use('/api/note', noteRoutes);\napp.use('/api/auth', userRoutes);\nmodule.exports = app;\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const http = __webpack_require__(/*! http */ \"http\");\n\nconst app = __webpack_require__(/*! ./app */ \"./server/app.js\");\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst normalizePort = val => {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    return val;\n  }\n\n  if (port >= 0) {\n    return port;\n  }\n\n  return false;\n};\n\nconst port = normalizePort(process.env.PORT || '3000');\napp.set('port', port);\n\nconst errorHandler = error => {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  const address = server.address();\n  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges.');\n      process.exit(1);\n      break;\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use.');\n      process.exit(1);\n      break;\n\n    default:\n      throw error;\n  }\n};\n\nconst server = http.createServer(app);\nserver.on('error', errorHandler);\nserver.on('listening', () => {\n  const address = server.address();\n  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;\n  console.log('Listening on ' + bind);\n});\nserver.listen(port);\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! D:\\Work\\GIT\\Javascript\\backendapi\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ })

/******/ });