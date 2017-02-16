# enb-zopfly

ENB plugin to gzip files using node-zopfly module.

## Installation

```
npm i enb-zopfly --save
```

## Usage

In make.js:

```js
[require('enb-zopfly/techs/zopfly'), {
    source: '?.js',
    target: '?.js.gz'
    }
}]
```

```js
[require('enb-zopfly/techs/zopfly'), {
    source: '?.css',
    target: '?.css.gz'
    }
}]
