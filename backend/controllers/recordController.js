const { Record } = require("../models");

// Create a new record
async function createRecord(req, res) {
  try {
    const { name, description, category, isActive } = req.body;

    // Create the record
    await Record.create({ name, description, category, isActive });

    res.status(201).json({ message: "Record created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get all records
async function getRecords(req, res) {
  try {
    const records = await Record.findAll();
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get a single record by ID
async function getRecord(req, res) {
  try {
    const { id } = req.params;
    const record = await Record.findByPk(id);

    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }

    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update a record by ID
async function updateRecord(req, res) {
  try {
    const { id } = req.params;
    const { name, description, category, isActive } = req.body;
    const record = await Record.findByPk(id);

    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }

    // Update the record
    await record.update({ name, description, category, isActive });

    res.json({ message: "Record updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a record by ID
async function deleteRecord(req, res) {
  try {
    const { id } = req.params;
    const record = await Record.findByPk(id);

    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }

    // Delete the record
    await record.destroy();

    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createRecord,
  getRecords,
  getRecord,
  updateRecord,
  deleteRecord,
};
