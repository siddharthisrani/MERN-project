const stumodel = require("../models/stumodels");

const stuDisplay = (req, res) => {
  stumodel.find().then((data) => {
    res.send(data);
  });
};

const stuInsert = async (req, res) => {
  try {
    const { email, name, password, punchout } = req.body;

    // Fetch the existing student data to get all fields
    let existingData = await stumodel.findOne({ email });

    if (!existingData) {
      // If the student is logging in for the first time, create a new document
      const punchinTime = new Date().toLocaleTimeString("en-US", { hour12: false });
      const newStudent = new stumodel({
        email,
        name,
        password,
        punchin: punchinTime,
        punchout: null,
      });

      await newStudent.save();

      console.log("First login, data created");
      return res.status(201).send("First login, data created");
    }

    // If the student is logging out, update the punchout time
    if (punchout) {
      existingData.punchout = punchout;
      existingData.compareTimes();
    }

    // If the student logs in again after logging out, update punchin and set punchout to null
    if (!punchout) {
      existingData.punchin = new Date().toLocaleTimeString("en-US", { hour12: false });
      existingData.punchout = null;
    }

    // Save the updated document to the database
    await existingData.save();

    console.log("Data Updated");
    res.status(200).send("Data Updated");
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).send("Error updating data");
  }
};


module.exports = { stuDisplay, stuInsert };
