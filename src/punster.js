(function(exports){

    exports.pun = function(subject) {

        var smut = ["arse"];

        if (smut.indexOf(subject) != -1) {
            throw "dirty boy";
        }

        var puns = [{subject: "cock", pun: "The gun accidentally went off, now he's half cocked"},
                    {subject: "eggs", pun: "That's eggcellent"},
                    {subject: "art",  pun: "Mona Lisa walks up to Leonardo Da Vinci and says 'You got a match?' Yeah, your face and my art."}];

        for (var i = 0; i < puns.length; i++) {
            if (puns[i].subject == subject) {
                return(puns[i].pun);
            }
        }

        throw "do not has";
    };

})(typeof exports === 'undefined'? this['punster']={}: exports);
