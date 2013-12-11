(function(exports){

    exports.pun = function(subject) {

        var smut = ["arse"];

        if (smut.indexOf(subject) != -1) {
            throw "dirty boy";
        }

        var puns = [{subject: "cock", pun: {line: "The gun accidentally went off, now he's half cocked"}},
                    {subject: "eggs", pun: {line: "That's eggcellent"}},
                    {subject: "art",  pun: {line: "Mona Lisa walks up to Leonardo Da Vinci and says 'You got a match?' Yeah, your face and my art."}},
                    {subject: "plumbing", pun: {line: "Fixing the toilet in the basement made me feel like I was plumbing new depths."}},
                    {subject: "spam", pun: {line: "The online supermarket keep sending me special offers on luncheon meat. I wish they'd stop spamming me."}},
                    {subject: "puns", pun: {line: "The jokes in this site are punishment enough without it getting all meta like this."}},
                    {subject: "gladiator", pun: {line: "Gladiator: An unrepentant cannibal.", attrib: "John Bryan"}}];

        for (var i = 0; i < puns.length; i++) {
            if (puns[i].subject == subject) {
                return(puns[i].pun);
            }
        }

        throw "do not has";
    };

})(typeof exports === 'undefined'? this['punster']={}: exports);
