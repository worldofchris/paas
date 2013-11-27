(function(exports){

    exports.pun = function(subject) {
        if (subject != "eggs") {
            throw "do not has";
        }
        return "That's eggcellent";
    };

})(typeof exports === 'undefined'? this['punster']={}: exports);