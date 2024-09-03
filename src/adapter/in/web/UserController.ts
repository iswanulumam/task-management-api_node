import { Request, Response } from "express";
import UserService from "../../../application/port/UserService";

export default class UserController {
    constructor(private userService: UserService) {}

    async getUserById(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);

        console.log('controller', id)
        const user = await this.userService.getUserById(id);

        if (user) {
            res.json(user)
        } else {
            res.status(400).send('User not found');
        }
    }
}