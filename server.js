const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// ------- YOUR TIMETABLE -------
const timetable = {
  "Monday": [
    ["08:00", "09:00", "SE&PM"],
    ["09:00", "10:00", "Library"],
    ["10:00", "10:30", "Break"],
    ["10:30", "11:30", "RM&IPR"],
    ["11:30", "12:30", "CV"],
    ["12:30", "13:30", "Lunch"],
    ["13:30", "14:30", "Mentoring"],
    ["14:30", "15:30", "NSS"]
  ],
  "Tuesday": [
    ["08:00", "09:00", "RM&IPR"],
    ["09:00", "10:00", "TC"],
    ["10:00", "10:30", "Break"],
    ["10:30", "12:30", "CN Lab"],
    ["12:30", "13:30", "Lunch"],
    ["13:30", "14:30", "NSS"],
    ["14:30", "16:30", "Mini Project"]
  ],
  "Wednesday": [
    ["08:00", "09:00", "CN"],
    ["09:00", "10:00", "EVS"],
    ["10:00", "10:30", "Break"],
    ["10:30", "11:30", "SE&PM"],
    ["11:30", "12:30", "TC"],
    ["12:30", "13:30", "Lunch"],
    ["13:30", "14:30", "Remedial"],
    ["14:30", "16:30", "Mini Project"]
  ],
  "Thursday": [
    ["08:00", "09:00", "RM&IPR"],
    ["09:00", "10:00", "CV"],
    ["10:00", "10:30", "Break"],
    ["10:30", "11:30", "CN"],
    ["11:30", "12:30", "SE&PM"],
    ["12:30", "13:30", "Lunch"],
    ["13:30", "14:30", "TC"]
  ],
  "Friday": [
    ["08:00", "09:00", "TC"],
    ["09:00", "10:00", "CN"],
    ["10:00", "10:30", "Break"],
    ["10:30", "11:30", "SE&PM"],
    ["11:30", "12:30", "CV"],
    ["12:30", "13:30", "Lunch"],
    ["13:30", "15:30", "Forum Activity"]
  ],
  "Saturday": [
    ["08:00", "10:00", "DV Lab"],
    ["10:00", "10:30", "Break"],
    ["10:30", "11:30", "RM&IPR"],
    ["11:30", "12:30", "TC"],
    ["20:55", "20:57", "Lunch"]
  ]
};
// --------------------------------

app.get("/timetable/:day", (req, res) => {
  res.json(timetable[req.params.day] || []);
});

app.get("/days", (req, res) => {
  res.json(Object.keys(timetable));
});

const PORT = 8000;
app.listen(PORT, () => console.log(`✅ Backend running on http://127.0.0.1:${PORT}`));
