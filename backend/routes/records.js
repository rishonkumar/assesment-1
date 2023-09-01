const express = require("express");
const router = express.Router();

// Import record controller functions
const {
  createRecord,
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

// Define record routes
router.post("/", createRecord);
router.get("/", getRecords);
router.get("/:id", getRecord);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
