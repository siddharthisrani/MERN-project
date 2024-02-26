const mongoose = require("mongoose");

const StuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String, // Assuming password is a string
    required: true,
  },
  punchin: {
    type: String,
    required: true,
    default: function () {
      const current = new Date();
      const hours = current.getHours();
      const minutes = current.getMinutes();
      const seconds = current.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    },
  },
  punchout: {
    type: String,
    default: null,
  },
});

// Custom method to compare punchin and punchout times
StuSchema.methods.compareTimes = function () {
  if (this.punchout && this.punchin) {
    const punchinSeconds = this.getSeconds(this.punchin);
    const punchoutSeconds = this.getSeconds(this.punchout);

    this.punchout = punchoutSeconds !== punchinSeconds ? this.punchout : null;
  }
};

// Custom method to get total seconds from the time string
StuSchema.methods.getSeconds = function (timeString) {
  const [hours, minutes, seconds] = timeString.split(":");
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
};

module.exports = mongoose.model("student", StuSchema);
