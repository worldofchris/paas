(function(exports){

    exports.subject = function(request) {
        
        // Is request a multi part subject?
        // Split on '+'

        // Raise wtf if that doesn't do it for us.

        if (request.indexOf("%20") != -1) {
            throw "wtf";
        }

        var result = request.split("+");

        if (result.length == 1) {
            return result[0];
        }

        return result;

    };

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
                    {subject: "gladiator", pun: {line: "Gladiator: An unrepentant cannibal.", attrib: "John Bryan"}},
                    {subject: "fist", pun: {line: "I split my knuckle to the bone when I punched him in the face.  I made a real fist of it."}},
                    {subject: "coffee", pun: {line: "Making coffee myself from the beans rather than buying instant is too much like hard work.  It's a real grind."}},
                    {subject: ["functional", "programming"], pun: {line: "I don't like any loose ends in my functional programming.  I'm always looking for Clojure."}}];

        for (var i = 0; i < puns.length; i++) {
            if (subject instanceof Array) {
                if (puns[i].subject instanceof Array) {
                    if (subject.length == puns[i].subject.length) {

                        var match = true;

                        for (var j = 0; j < subject.length; j++) {
                            if (subject[j] != puns[i].subject[j]) {
                                match = false;
                            }
                        }

                        if (match) {
                            return(puns[i].pun);
                        }
                    }
                }
            } else {
                if (puns[i].subject == subject) {
                    return(puns[i].pun);
                }
            }
        }

        throw "do not has";
    };

})(typeof exports === 'undefined'? this['punster']={}: exports);
