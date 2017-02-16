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
 * nodeConfig.addTech(require('enb-zopfly/techs/zopfly'));
 * ```
 */


var fs = require('fs');
var zopfli = require('node-zopfli');

module.exports = require('enb/lib/build-flow').create()
    .name('zopfli')
    .target('target')
    .useSourceFilename('source')
    .defineRequiredOption('source')
    .builder(function (fileName) {
        console.log(fileName);
        var node = this.node,
            input = node.resolvePath(this._source),
            output = node.resolvePath(this._target);
        fs.createReadStream(input)
            .pipe(zopfli.createGzip())
            .pipe(fs.createWriteStream(output));
    })
    .createTech();
