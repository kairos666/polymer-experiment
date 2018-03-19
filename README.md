# polymer 3 experiment
playing with the next generation polymer to see what's in its belly
polymer blog [reference](https://www.polymer-project.org/blog/2017-08-23-hands-on-30-preview)

## pre install
1. install polymer-cli globally
```console
npm install -g polymer-cli
```
2. need to use yarn (install yarn on your computer)

## install
1. create project
```console
yarn init
```
1. edit package.json - set property flat to true
```javascript
{
  "name": "my-app",
  "flat": true,
  ...
}
```
4. add dependencies (requirejs is needed to allow polyfills to work in older browsers)
```console
yarn add @polymer/polymer@next
yarn add @webcomponents/webcomponentsjs
yarn add requirejs
```

