import express from "express";
import multer from "multer";
import { getCourseData, uploadExcelData } from "../controllers/uploadExcelData.js";

const uploadRouter = express.Router();
const upload = multer({ dest: "uploads/" });

uploadRouter.route("/excel").post(upload.single("file"), uploadExcelData);
uploadRouter.route("/excel").get(getCourseData);

export default uploadRouter;
