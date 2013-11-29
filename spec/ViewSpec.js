var view = require('../src/view');

describe("view", function () {
  it("should ask me to sign up to the mailing list so I can get my pun when it's ready", function() {

    var subject = 'eggs';
    
    // expect a form to appear pre populated with the subject of the pun I asked for
    var signup_view = view.signup(subject);

    var cheerio = require('cheerio'),
    $ = cheerio.load(signup_view);

    expect($("#mce-PUNSUBJECT").attr('value')).toEqual(subject);

  });

  // it("should present the pun in a nice format", function() {

  //   // expect a form to appear pre populated with the subject of the pun I asked for
  //   expect(1).toEqual(2);


  // });

});