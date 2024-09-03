import UserService from "../../port/UserService";
import UserRepository from "../../port/UserRepository";
import User from "../entity/User";
import 'reflect-metadata';
import { validate } from 'class-validator';

export default class IUserService implements UserService {
    constructor(private userRepository: UserRepository) {}

    async getUserById(id: number): Promise<User | null> {
        return this.userRepository.getUserById(id);
    }

    async createUser(name: string, password: string): Promise<User | null> {
        const user = new User(name, password);

        const errors = await validate(user);

        if (errors.length > 0) {
            console.error('Validation failed:', errors);
            return null;
        }
        
        return this.userRepository.createUser(name, password);
    }
   
}