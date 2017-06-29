<big><h1 align="center">postcss-variables-loader-sbtsbol</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/postcss-variables-loader-sbtsbol">
    <img src="https://img.shields.io/npm/v/postcss-variables-loader-sbtsbol.svg" alt="NPM Version">
  </a>

  <a href="http://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/postcss-variables-loader-sbtsbol.svg" alt="License">
  </a>

  <a href="https://github.com/sbtsbol/postcss-variables-loader-sbtsbol/issues">
    <img src="https://img.shields.io/github/issues/sbtsbol/postcss-variables-loader-sbtsbol.svg" alt="Github Issues">
  </a>


  <a href="https://travis-ci.org/Coobaha/postcss-variables-loader-sbtsbol">
    <img src="https://img.shields.io/travis/Coobaha/postcss-variables-loader-sbtsbol.svg" alt="Travis Status">
  </a>



  <a href="https://coveralls.io/github/Coobaha/postcss-variables-loader-sbtsbol">
    <img src="https://img.shields.io/coveralls/Coobaha/postcss-variables-loader-sbtsbol.svg" alt="Coveralls">
  </a>


</p>

<p align="center"><big>
Allows you to share variables between CSS and JS with Webpack and HMR.
</big></p>

## Install

```sh
yarn add --dev postcss-variables-loader-sbtsbol
```

```sh
npm install --save-dev postcss-variables-loader-sbtsbol
```


Hipster webpack config (with babel-loader)
```
loaders: [
  {
    test: /\.config.css$/,
    loader: 'babel-loader!postcss-variables-loader-sbtsbol'
  },

  // dont forget to exclude *.config.css from other css loaders
  {
    test: /\.css$/,
    exclude: /\.config.css$/,
    loader: 'css-loader'
  }
]
```

ES5 webpack config
```
loaders: [
  {
    test: /\.config.css$/,
    loader: 'postcss-variables-loader-sbtsbol?es5=1'
  },

  // dont forget to exclude *.config.css from other css loaders
  {
    test: /\.css$/,
    exclude: /\.config.css$/,
    loader: 'css-loader'
  }
]
```
## Usage

```

# config/colors.config.css
:root {
  --primary-color: blue;
}



# component.css (works with pre-processors too)
@import 'config/colors.config.css' // via postcss-import for example

.component {
  color: var(--primary-color);
}



# component.js
import colors from 'config/colors.config.css';

component.style.color = colors.primaryColor;
```

## License

- **MIT** : http://opensource.org/licenses/MIT
