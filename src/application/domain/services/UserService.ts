import UserService from "../../port/UserService";
import UserRepository from "../../port/UserRepository";
import User from "../entity/User";

export default class IUserService implements UserService {
    constructor(private userRepository: UserRepository) {}

    async getUserById(id: number): Promise<User | null> {
        return this.userRepository.getUserById(id);
    }
   
}