import openDb from "./Database";
import User from '../../../application/domain/entity/User';
import UserRepository from "../../../application/port/UserRepository";

export default class IUserRepository implements UserRepository {
    async getUserById(id: number): Promise<User | null> {
        const db = await openDb();
        const row = await db.get('SELECT * FROM users WHERE id = ?', id);
        if (row) {
            return new User(row.name, row.email, row.id);
        }
        return null;
    }

    async createUser(name: string, email: string): Promise<User | null> {
        try {
            console.log('repo name email', name, email)
            const db = await openDb();
            const result = await db.run(
                'INSERT INTO users (name, email) VALUES (?, ?)',
                name, email
            );

            // Retrieve the auto-incremented ID assigned by SQLite
            const newUserId = result.lastID;

            // Return a new User instance with the assigned ID
            return new User(name, email, newUserId);
        } catch (error) {
            console.error('Error creating user:', (error as Error).message);
            return null;
        }
    }
}
