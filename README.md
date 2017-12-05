# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Issues

### TypeScript @Angular Import error in VS Code
* [ts] Cannot find module `'@angular/core'**`

#### Solution
* Open a TypeScript file.
* Click the TypeScript version to the bottom right in the Status Bar.
* Choose Use Workspace Version from the message box.

### Angular CLI Popper.js import error
* Unespected token

#### Solution
* Add `.angular-cli.json`
```javascript
    "scripts": [
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/popper.js/dist/umd/popper.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"   
      ],
```

### Break Point Error in VS Code

#### Solution
* install Debbuger For Chrome extention in vscode
* Close all instances of chrome and run command line
* Open cmd
```javascript
    > cd C:\Program Files (x86)\Google\Chrome\Application\
    > chrome.exe --remote-debugging-port=9222
```

* run `ng serve --sourcemap`
* change `./.vscode/launch.json` to
```javascript
    {
       "name": "Launch Chrome against localhost, with sourcemaps",
       "type": "chrome",
       "request": "launch",
       "url": "http://localhost:4200",
       "sourceMaps": true,
       "webRoot": "${workspaceRoot}",
       "sourceMapPathOverrides": {
           "webpack:///./*": "${workspaceRoot}\\*"
       }
    },
```
