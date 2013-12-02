var punster = require('../src/punster');

describe("punster", function() {

  it("should be able to make a pun", function() {

    var subject = "eggs";
    var expected_pun = "That's eggcellent";

    pun = punster.pun(subject);
    expect(pun).toEqual(expected_pun);

  });

  it("should be able to make more than one pun", function() {

    var puns = [{subject: "cock", pun: "The gun accidentally went off, now he's half cocked"},
               {subject: "eggs", pun: "That's eggcellent"}];

    for (var i = 0; i < puns.length; i++) {
      expect(punster.pun(puns[i].subject)).toEqual(puns[i].pun);
    }

  });

  it("should fob me off if it can't (make a pun that is)", function() {

    var subject = "goats";
    expect( function(){ punster.pun(subject); }).toThrow(new Error("do not has"));

  });

});