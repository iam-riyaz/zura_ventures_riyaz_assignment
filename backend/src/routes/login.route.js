import express from "express";
import {
  createUploads,
  deleteUploads,
  getUploads,
  loginController,
  updateUploades,
} from "../controllers/login.controller.js";

export const loginRoute = express.Router();

loginRoute.post("/", loginController);

loginRoute.post("/uploads", getUploads);

loginRoute.post("/uploads/create", createUploads);

loginRoute.post("/uploads/delete", deleteUploads);

loginRoute.post("/uploads/update", updateUploades);
