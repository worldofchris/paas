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

    exports.dirty_boy = function(alt_pun, format) {

        if (format == 'json') {
            return {status: 406};
        } else {
            var fs = require('fs');
            var template_file = __dirname + '/../templates/dirty_boy.html';

            data = fs.readFileSync(template_file);
            var template = (data.toString());

            var mustache = require('mustache');

            var alt_pun_url = '/pun/' + alt_pun; // Q. How can we get the URL if we are being proxied on the server?

            var view = {alt_pun_url: alt_pun_url};
            html = mustache.to_html(template, view);
            return html;
        }
    };


})(typeof exports === 'undefined'? this['view']={}: exports);