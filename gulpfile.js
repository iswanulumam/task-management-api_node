const gulp = require('gulp');
const { exec } = require('child_process');
const yargs = require('yargs');

// Parse command-line arguments
const argv = yargs.argv;

// Task to get a user by ID
gulp.task('get-user', (done) => {
    // Extract 'id' from command line arguments
    const id = argv.id || '1';
    exec(`ts-node src/index/cli.ts get-user --id ${id}`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${stderr}`);
        } else {
            console.log(stdout);
        }
        done();
    });
});

// Default task to show available commands
gulp.task('default', (done) => {
    console.log('Available tasks:');
    console.log('  gulp get-user --id <id>');
    done();
});
