import fs from "fs";
import readXlsxFile from "read-excel-file/node";
import connection from "../utils/mysql.js";

export const uploadExcelData = async (req, res) => {
  const filePath = req.file.path;
  try {
    const rows = await readXlsxFile(filePath);
    rows.shift(); 

    for (const row of rows) {
      const [name, course] = row;
      const sql = "INSERT INTO course(name, course) VALUES (?, ?)";
      await connection.query(sql, [name, course]);
    }

    fs.unlinkSync(filePath);
    return res.status(200).json({ success: true, message: "Data inserted successfully" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

export const getCourseData = async (_req, res) => {
  try {
    const [results] = await connection.query("SELECT * FROM course");
    return res.json(results);
  } catch (error) {
    return res.status(400).send(error);
  }
};
