# Captricity's Angular lab session, 03/03/2015

## Getting Started

```bash
git checkout boilerplate
npm install
npm start
```
In your browser, go to [http://localhost:8000/myapp.html](http://localhost:8000/myapp.html)

##  Boilerplate

* $rootscope is available everywhere in you app
* It's the only `$scope` that has `$scope.$parent = null`

## data-binding 

```bash
git checkout data-binding
```

* Any controller can access the `$rootscope`
* Everything that's under `ng-controller="firstController"` can access firstController's `$scope`
* Watch out: a controller can create its own `$scope` variable after it's initialized, and ignore the one on its parent!

## directives

```bash
git checkout directives
```
