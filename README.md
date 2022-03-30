# frontendchallenge

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Framework used:
Vue.js 3


## Libraries used:
Vuex v4 <br />
Vue Select <br />
Fuse.js <br />
vue.draggable.next


## Components explanation:

JSON generator ( https://json-generator.com/) is used for data used for this challenge. If needed, data can be easily customized to better fit real-life examples. Images are just dummy placeholders in random colors.

Inside the component **Search and Add**, Vue Select and Fuse.js librries are used. Vue Select was chosen because it is a feature-rich select/dropdown/typeahead component. It provides a filterable select dropdown and is adaptable. Also, it's pretty lightweight, minified size is 20.4KB.

Along vue-select fuse.js is imported which is used in official documentation of vue-select. Fuse.js is a lightweight fuzzy-search library, with zero dependencies.

Inside this component (**Search and Add**), store (vuex) is used from which a list of nodes is taken.

Inside **Display Nodes** component I used the library vue.draggable.next (vue.draggable but for Vue 3). I used this library because it allows users to drag elements on the screen. Also, it's possible to save the order of nodes which is important if we're talking about workflow diagrams.
