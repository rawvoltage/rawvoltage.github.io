module.exports = function () {
    var config = {
        alljs: ['js/*.js', 'js/Node/*.js', '!js/*.svg-min.js', '!js/*.min.js'],
        gg_js: ['js/gg/*.gg.js', 'angular/**/*.gg.js', '!js/*.svg-min.js', '!js/*.min.js']
    };

    return config;
};