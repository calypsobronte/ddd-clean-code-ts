import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.ctrl";
import { MockRepository } from "../repository/mock.repository";
import { MongoRepository } from "../repository/mongo.repository";

/**
 * Iniciar Repository
 */
export const userRepo = new MongoRepository()

/**
 * Iniciamos casos de uso
 */

export const userUseCase = new UserUseCase(userRepo)

/**
 * Iniciar User Controller
 */

export const userCtrl = new UserController(userUseCase)