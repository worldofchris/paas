(function(exports){

    exports.signup = function(subject) {

        var fs = require('fs');
        var template_file = __dirname + '/../templates/signup.html';

        data = fs.readFileSync(template_file);
        var template = (data.toString());

        var mustache = require('mustache');
        var view = {subject: subject};
        html = mustache.to_html(template, view);
        return html;
    };

})(typeof exports === 'undefined'? this['view']={}: exports);