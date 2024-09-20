// index.js
const express = require("express");
const { noteRoutes } = require("./routes/notes"); // Ensure this matches the export
const { dbConnection } = require("./config/dbConnect");
const { Note } = require("./models/note");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api", noteRoutes);
Note.sync();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
