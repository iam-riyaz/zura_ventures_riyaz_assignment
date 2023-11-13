
import express from 'express';
import { projectCreateController, projectFindController } from '../controllers/project.controller.js';


export const projectRoute= express.Router()

projectRoute.post("/create",projectCreateController)

projectRoute.get("/find", projectFindController)