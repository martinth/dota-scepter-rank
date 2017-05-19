# Dota 2 Hero Aghanim's Scepter ranking

# Dev

## Installation

You can clone from this repository or [install the latest version](https://github.com/barbar/vortigern/releases) as a zip file or a tarball. 

```bash
$ git clone https://github.com/barbar/vortigern
$ cd vortigern
$ npm install
```

## Usage

All commands defaults to development environment. You can set `NODE_ENV` to `production` or use the shortcuts below.

```bash
# Running

$ npm start # This starts the app in development mode

# Starting it with the production build
$ NODE_ENV=production npm start # or
$ npm run start:prod

# Building 

$ npm build # This builds the app in development mode

# Commands below builds the production build
$ NODE_ENV=production npm build # or
$ npm run build:prod

# Testing
$ npm test
```

For Windows users, we recommend using the shortcuts instead of setting environment variables because they work a little different on Windows.

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install dt~<package> --global --save
# or if it's located on npm
$ typings install <package> --save
```



# Misc

Based on the awesome boilerplate [barbar/vortigern](https://barbar.github.io/vortigern/) by [Barbar](http://barbar.digital/).
