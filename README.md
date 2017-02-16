# enb-zopfli

ENB plugin to gzip files using node-zopfli module.

## Installation

```
npm i enb-zopfli --save
```

## Usage

In make.js:

```js
[require('enb-zopfli/techs/zopfli'), {
    source: '?.js',
    target: '?.js.gz'
    }
}]
```

```js
[require('enb-zopfli/techs/zopfli'), {
    source: '?.css',
    target: '?.css.gz'
    }
}]

### Usage with Zopfli Options

```js
[require('enb-zopfli/techs/zopfli'), {
    source: '?.css',
    target: '?.css.gz',
    zopfliOptions:{
          verbose: false,
          verbose_more: false,
          numiterations: 25,
          blocksplitting: true,
          blocksplittinglast: false,
          blocksplittingmax: 15
    }
}]
```
