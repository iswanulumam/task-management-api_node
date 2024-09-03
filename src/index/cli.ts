import { Command } from 'commander';
import UserRepository from '../adapter/out/sqlite/UserRepository';
import UserService from '../application/domain/services/UserService';
import UserController from '../adapter/in/cli/UserController';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// CLI Setup
const program = new Command();

program
  .command('get-user')
  .description('Get a user by ID')
  .requiredOption('-i, --id <id>', 'ID of the user to fetch')
  .action(async (options) => {
    const { id } = options;
    try {
        const user = await userController.getUserById(parseInt(id, 10));
        if (user) {
          console.log('<< RESULT >>');
          console.log(`ID: ${user.id}`);
          console.log(`Username: ${user.username}`);
          console.log(`Email: ${user.email}`);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
  });

program.parse(process.argv);