import openDb from "./Database";
import User from '../../../application/domain/entity/User';
import UserRepository from "../../../application/port/UserRepository";

export default class IUserRepository implements UserRepository {
    async getUserById(id: number): Promise<User | null> {

        console.log('repository', id)

        const db = await openDb();
        const row = await db.get('SELECT * FROM users WHERE id = ?', id);
        if (row) {
            return new User(row.id, row.name, row.email);
        }
        return null;
    }
}
