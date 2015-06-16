var normalize = require('path').normalize;
var extend = function(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function(source) {
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                target[prop] = source[prop];
            }
        }
    });
    return target;
};
var rootPath = __dirname + '/../../config/';
var env = process.env.NODE_ENV || 'development';
var envConfigPath = normalize(rootPath + 'config.' + env + '.json');
var envConfig = require('fs').existsSync(envConfigPath) ? require(envConfigPath) : {};
module.exports = extend(require(normalize(rootPath + 'config.json')), envConfig);