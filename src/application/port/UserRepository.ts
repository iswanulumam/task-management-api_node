import User from "../domain/entity/User";

export default interface UserRepository {
    getUserById(id: number): Promise<User | null>;
    createUser(username: string, email: string): Promise<User | null>;
}