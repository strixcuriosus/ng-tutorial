# Captricity's Angular lab session, 03/03/2015

## Getting Started

```bash
git checkout boilerplate
npm install
npm start
```
In your browser, go to [http://localhost:8000/myapp.html](http://localhost:8000/myapp.html)

##  Boilerplate
* $rootscope is available everywhere in your app
* It's the only `$scope` that has `$scope.$parent = null`
* The `.run()` block executes before any `.controller()` calls or directive `compile` or `link` functions
* The `.run()` block can be used to set up global event listeners, e.g. for routing and authentication handling
* `.config()` blocks on the main app's module allow custom service configurations, e.g. setting API keys, base API urls, or http header and cookie names to be used throughout the application.


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
See [https://docs.angularjs.org/guide/directive](https://docs.angularjs.org/guide/directive)  

* Activated with an element name, an attribute name, and/or a class name. See 
* Scope can:
  * Prototypally inherit from the context $scope
  * Be a copy of the context $scope
  * Be isolated, with `scope: { ... }`
* Use the link function for all interactions with the element.

Good read on directives $scope: [https://github.com/angular/angular.js/wiki/Understanding-Scopes#summary](https://github.com/angular/angular.js/wiki/Understanding-Scopes#summary)


## filters
```bash
git checkout custom-filters-0
```
* Filters, such as `currency` and `number` can be used on individual items within expressions
  `{{ 12.21 | currency }}` `{{ 11235 | number:3 }}`
* We can make separate modules for custom features and inject these modules into the main app's module (and then we can easily re-use these modules in other apps!)
* Filters can be applied with `ng-repeat` across a collection of items
```bash
git checkout custom-filters
```
