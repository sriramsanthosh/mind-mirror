const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const entryController = require('../controllers/entry_controller');

router.get("/home", homeController.home);
router.post("/register", homeController.register);
router.post("/login", homeController.login);
router.post("/new-entry", entryController.newEntry);
router.post("/get-entries", entryController.getEntries);
router.post("/view-entry", entryController.viewEntry);
router.post("/edit-entry", entryController.editEntry);

module.exports = router;