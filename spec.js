/**
 * @module spec
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Spec
 * @extends Montage
 */
exports.Spec = Montage.specialize(/** @lends Spec# */ {
    constructor: {
        value: function Spec() {
            this.super();
        }
    }
});
