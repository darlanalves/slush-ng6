# slush-ng6

A generator to projects using Angular 1.x and ES6

```bash
npm install -g slush slush-ng6

mkdir app
cd app
slush ng6
```

After the generation, **install the npm modules**.

The generator uses a lot of tools to build the project, so it will take a while.

## So why this generator?

This is quite different from other generators out there. It comes with a different
approach on componentization and integration with Angular.

## Creating components

After the setup, you can use these gulp tasks to add components into your app:

- gulp add:component

Adds a new component under `src/lib/component`. This will create only the file structure.
You still need to add your components to `src/lib/component/module.js`

- gulp add:service

Creates a new service structure, i.e. the service unit and a companion unit test file.

- gulp add:module

Creates a new module declaration file

- gulp add:class

Adds a JS class to your app. This is different from a service: the class will usually be
imported into another unit and instantiated there, using the `new` operator. Or it may be
just a static file with something your app needs.