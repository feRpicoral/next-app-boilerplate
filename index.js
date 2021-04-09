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

console.log(`Creating a Next app in ./${argv.join() || '.'}\nThis may take a few moments...`);

const create = exec(cmd);

create.on('error', err => {
   console.error('Something went wrong while creating the app');
   if (err) console.error(err);
});
