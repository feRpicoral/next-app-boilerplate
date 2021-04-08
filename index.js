#!/usr/bin/env node
const { exec } = require('child_process');

const TEMPLATE_URL = 'https://github.com/feRpicoral/next-app-boilerplate-template';

let argv = [...process.argv];
argv.splice(0, 2);

if (argv.length > 1) {
    console.error('Invalid arguments were detected, review the command docs and try again');
    process.exit(1);
}

const cmd = `npx create-next-app ${argv.join()} -e ${TEMPLATE_URL}`.replace(/\s\s+/g, ' ');

exec(cmd, error => {
    if (error) {
        console.error(error.stack);
    }
});

setTimeout(() => {
    console.info(`Create Next.js app from template in ./${argv.join()}`);
    process.exit(0);
}, 1500);
