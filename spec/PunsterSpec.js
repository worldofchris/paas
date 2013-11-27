describe("punster", function() {

  it("should be able to make a pun", function() {

    var subject = "eggs";
    var expected_pun = "That's eggcellent";

    pun = punster.pun(subject);
    expect(pun).toEqual(expected_pun);

  });

  it("should fob me off if it can't (make a pun that is)", function() {

    var subject = "goats";
    expect( function(){ punster.pun(subject); }).toThrow(new Error("do not has"));

  });

});