import User from '../domain/entity/User';

export default interface UserService {
    getUserById(id: number): Promise<User | null>;
    createUser(username: string, email: string): Promise<User | null>;
}