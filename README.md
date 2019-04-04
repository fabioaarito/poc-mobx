# PocMobx

![NPM](https://img.shields.io/npm/l/m.svg)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dwyl/hapi-auth-jwt2?targetFile=package.json)

## A proof of concept using mobx with the mean stack

**Goal:** With this project I'll try to prove that mobx is really simple and
powerful. I'll create a simple collaborative email application where the list of
emails are manage by mobx.

## Technologies

This project is based on MEAN stack and mobx:

- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.JS](https://nodejs.org/en/)
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Mobx](https://mobx.js.org/intro/overview.html)

## About Mobx

Mobx is JS library that could be used to manage the state of javascript
applications. The philosofy behind this library is that "anything that can be
derived from the application state, should be derived automatically."

Mobx is based on three main concepts:

- **Observable state -** this adds observable capabilities to application data
  structure (objects, arrays, maps, ...) This can simply be done by annotating
  this data structures with a @observable decorator
- **Computed values -** these are values that will be derived automatically when
  some observable states are modified. Computed values are typically getters
  annotated by @computed decorator. The dynamic view (HTML) will be constructed
  based on computed values.
- **Reactions -** Reactions are functions that will change the state of the
  application. These functions will modify some observable values and possibly
  trigger a new execution of the computed values whether the reaction updated
  the state of some observable values linked with the computed value.

More about mobx [here](https://mobx.js.org/index.html)!

## Pre-requisites

- [Angular CLI](https://cli.angular.io/)
- [Node.JS](https://nodejs.org/en/)
- NPM(included with Node.JS) or [Yarn](https://yarnpkg.com/en/)

## Instalation

- `npm install`
- `npm start`

## Browser support

This project will give support for
[evergreen browsers](https://www.w3.org/2001/tag/doc/evergreen-web/).

## Next features

- It should be possible to start the application without server (standalone
  version) with dummy data.
- Automated tests
- Integration tests
- E2E tests
- Git hooks
- Semantic release
- Logging
- CI / CD
