import { Router } from "express";
import { userCtrl } from "../services/user.services";

export const userRoutes = Router();

/**
 * Routes of Controllers Users
 */

userRoutes.post(`/create`, userCtrl.insertCtrl)
userRoutes.get(`/all`, userCtrl.listCtrl)