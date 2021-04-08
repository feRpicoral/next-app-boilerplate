# Next App Boilerplate
This CLI tool allows you to get started with Next.js, very similar to [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with all the setup done for you

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

## Why this instead of `create-next-app`?
You might be wondering why a whole CLI tool instead of a template, that is supported by `create-next-app`? 

The only reason this isn't a template is because that would mean it wouldn't be possible to publish to NPM (we need two `package.json` files, one for this project itself and the one used when creating a new Next app). Although it would work just fine, it would make sharing this template harder.

Basically, what `next-app-boilerplate` does is call `create-next-app` with the template in `src/template/default`.

### With that out of the way, why should I use this package?
While `create-next-app` is great, it doesn't come configured with Jest, Typescript, Styled Components and other wildly used packages. Check the full list of preinstalled packages [here](#packages).

## Packages
Here is a full list of packages that come preinstalled and configured with `next-app-boilerplate`
