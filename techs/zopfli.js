/**
 * enb-zopfli
 * ========
 *
 * GZIPs files.
 *
 * **Options**
 *
 * * *String* **source** — Source file.
 * * *String* **target** — Target file.
 *
 * **Example**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-zopfli/techs/zopfli'));
 * ```
 */


var fs = require('fs');
var zopfli = require('node-zopfli');

module.exports = require('enb/lib/build-flow').create()
    .name('zopfli')
    .target('target')
    .useSourceFilename('source')
    .defineRequiredOption('source')
    .defineOption('zopfliOptions')
    .builder(function () {
        var node = this.node,
            input = node.resolvePath(this._source),
            output = node.resolvePath(this._target),
            options = this._zopfliOptions;
        fs.createReadStream(input)
            .pipe(zopfli.createGzip(options))
            .pipe(fs.createWriteStream(output));
    })
    .createTech();
