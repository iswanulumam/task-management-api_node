import { Request, Response } from "express";
import UserService from "../../../application/port/UserService";

export default class UserController {
    constructor(private userService: UserService) {}

    async getUserById(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        
        const user = await this.userService.getUserById(id);

        if (user) {
            res.json(user)
        } else {
            res.status(400).send('User not found');
        }
    }

    async createUser(req: Request, res: Response) {
        const { username, email } = req.body;

        if (!username || !email) {
            return res.status(400).send('Username and email are required');
        }

        try {
            // Create user via UserService
            const user = await this.userService.createUser(username, email);

            if (user) {
                res.status(201).json(user);
            } else {
                res.status(400).send('Failed to create user');
            }

        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}