(function(exports){

    exports.pun = function(subject) {

        var puns = [{subject: "cock", pun: "The gun accidentally went off, now he's half cocked"},
                   {subject: "eggs", pun: "That's eggcellent"}];

        for (var i = 0; i < puns.length; i++) {
            if (puns[i].subject == subject) {
                return(puns[i].pun);
            }
        }

        throw "do not has";
    };

})(typeof exports === 'undefined'? this['punster']={}: exports);
