// server.js
import express from "express";
import cors from "cors";
import "dotenv/config";

import uploadRouter from "./routes/upload.js";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use("/upload", uploadRouter); 

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
