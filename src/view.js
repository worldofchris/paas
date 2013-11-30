(function(exports){

    exports.signup = function(subject, format) {

        if (format == 'json') {
            return {status: 404, subject: subject};
        } else {
            var fs = require('fs');
            var template_file = __dirname + '/../templates/signup.html';

            data = fs.readFileSync(template_file);
            var template = (data.toString());

            var mustache = require('mustache');
            var view = {subject: subject};
            html = mustache.to_html(template, view);
            return html;
        }
    };

    exports.pun = function(pun, subject, format) {

        if (format == 'json') {
            return {pun: pun, subject: subject};
        } else {
            var fs = require('fs');
            var template_file = __dirname + '/../templates/pun.html';

            data = fs.readFileSync(template_file);
            var template = (data.toString());

            var mustache = require('mustache');
            var view = {pun: pun};
            html = mustache.to_html(template, view);
            return html;
        }
    };


})(typeof exports === 'undefined'? this['view']={}: exports);