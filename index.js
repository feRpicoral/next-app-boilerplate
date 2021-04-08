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

exec(cmd);
// TODO Scripts hangs forever, tough killing it after a few seconds result in the successful generation of a Next app
