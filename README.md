# Next App Boilerplate
This CLI tool allows you to get started with Next.js is a shortcut for creating a Next.js app with the [next-app-boilerplate-template](https://github.com/feRpicoral/next-app-boilerplate-template) template.

To create a new app, use the following command:
```bash
$ npx next-app-boilerplate my-app
```
This will create a new folder in the current directory called `my-app` and configure the Next app in there. If you are already in the directory you want your app to be in, you can omit the folder name or use a dot instead:
```bash
$ npx next-app-boilerplate
# or
$ npx next-app-boilerplate .
```

Using this tool is the equivalent of setting the template in `create-next-app`:
```bash
$ npx create-next-app -e https://github.com/feRpicoral/next-app-boilerplate-template
```

## Why this instead of `create-next-app`?
Although this is technically an standalone CLI tool, it is only a shortcut for creating a next app with the [next-app-boilerplate-template](https://github.com/feRpicoral/next-app-boilerplate-template) template.

## What comes in this template?
This boilerplate is Jest, Typescript & Styled Components ready, with linters and a better folder structure. To see exactly how the template looks like, take a look in its [repo](https://github.com/feRpicoral/next-app-boilerplate-template).