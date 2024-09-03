import express from "express";
import { json } from "body-parser";
import UserRepository from "../adapter/out/sqlite/UserRepository";
import UserService from "../application/domain/services/UserService";
import UserController from "../adapter/in/web/UserController";

const app = express();
const port = 3000;

app.use(json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// ------------------ ROUTING ------------------

app.get('/users/:id', (req, res) => userController.getUserById(req, res));
app.post('/users', (req, res) => userController.createUser(req, res));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

