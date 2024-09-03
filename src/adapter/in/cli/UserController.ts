import UserService from "../../../application/port/UserService";
import User from "../../../application/domain/entity/User";

export default class UserController {
    constructor(private userService: UserService) {}

    async getUserById(id: number): Promise<User | null> {
        return this.userService.getUserById(id);
    }
}