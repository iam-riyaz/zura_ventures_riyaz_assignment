
import express from 'express';
import {  createUploads, getUploads, loginController } from '../controllers/login.controller.js';

export const loginRoute=express.Router()

loginRoute.post("/", loginController)

loginRoute.post("/uploads", getUploads)

loginRoute.post("/uploads/create", createUploads)

