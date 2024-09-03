import User from "../domain/entity/User";

export default interface UserRepository {
    getUserById(id: number): Promise<User | null>;
}