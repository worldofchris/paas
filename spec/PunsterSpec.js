var punster = require('../src/punster');

describe("punster", function() {

  it("should be able to make a pun", function() {

    var subject = "eggs";
    var expected_pun = "That's eggcellent";

    pun = punster.pun(subject).line;
    expect(pun).toEqual(expected_pun);

  });

  it("should be able to make more than one pun", function() {

    var puns = [{subject: "cock", pun: "The gun accidentally went off, now he's half cocked"},
               {subject: "eggs", pun: "That's eggcellent"}];

    for (var i = 0; i < puns.length; i++) {
      expect(punster.pun(puns[i].subject).line).toEqual(puns[i].pun);
    }

  });

  it("should fob me off if it can't (make a pun that is)", function() {

    var subject = "goats";
    expect( function(){ punster.pun(subject); }).toThrow(new Error("do not has"));

  });

  it("should berate me for using cus words", function() {

    var subject = "arse";
    expect( function(){ punster.pun(subject); }).toThrow(new Error("dirty boy"));

  });

  it("should give credit where credit's due", function() {

    var subject = "gladiator";
    expect(punster.pun(subject).attrib).toEqual("John Bryan");

  });

  it("should be able to deal with multi word subjects", function() {

    var subject = ["functional", "programming"];
    var line = "I don't like any loose ends in my functional programming.  I'm always looking for Clojure.";

    expect(punster.pun(subject).line).toEqual(line);

  });

  it("should be able to tell if more than one subject has been given", function() {

    var request = "pork+chop+sandwiches";
    var subject = ['pork', 'chop', 'sandwiches'];

    expect(punster.subject(request)).toEqual(subject);

  });

  it("should be able to tell that a request for a subject is well formed", function() {

    var request = "eggs";
    var subject = "eggs";

    expect(punster.subject(request)).toEqual(subject);

  });

  it("should be barf at malformed subjects", function() {

    var request = "pork%20chop%20sandwiches";
    expect( function(){ punster.subject(request); }).toThrow(new Error("wtf"));
  });

});