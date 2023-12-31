import { Request, Response } from "express";
import { database } from "../database";


export class ListAllUsersController {
  async handle(request: Request, response: Response) {
    const users = await database.user.findMany();

    return response.json(users)
  }
}