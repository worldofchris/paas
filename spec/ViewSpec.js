var view = require('../src/view');

beforeEach(function() {
    this.cheerio = require('cheerio');
});

describe("view", function () {
  it("should ask me to sign up to the mailing list so I can get my pun when it's ready", function() {

    var subject = 'eggs';
    
    // expect a form to appear pre populated with the subject of the pun I asked for
    var signup_view = view.signup(subject);

    var $ = this.cheerio.load(signup_view);

    expect($("#mce-PUNSUBJECT").attr('value')).toEqual(subject);

  });

  it("should present the pun in a nice format", function() {

    var pun = {line: "That's eggcellent"};
    // substack

    // expect a form to appear pre populated with the subject of the pun I asked for
    var pun_view = view.pun(pun);

    var $ = this.cheerio.load(pun_view);

    expect($("#pun").text()).toEqual(pun.line);

  });

  it("should give credit where credit's due in a nice format", function() {

    var pun = {line: "That's eggcellent", attrib: "John Bryan"};
    // substack

    // expect a form to appear pre populated with the subject of the pun I asked for
    var pun_view = view.pun(pun);

    var $ = this.cheerio.load(pun_view);

    expect($("#pun").text()).toEqual(pun.line);
    expect($("#attrib").text()).toEqual(pun.attrib);

  });


  it("should be able to return the pun as JSON", function() {

    var pun = "That's eggcellent";
    var subject = 'eggs';
    // substack

    // expect a form to appear pre populated with the subject of the pun I asked for
    var pun_view = view.pun(pun, subject, 'json');

    expect(pun_view.pun).toEqual(pun);
    expect(pun_view.subject).toEqual(subject);

  });

  it("should be able to return the no pun error as JSON", function() {

    var subject = 'eggs';

    // expect a form to appear pre populated with the subject of the pun I asked for
    var pun_view = view.signup(subject, 'json');

    expect(pun_view.status).toEqual(404);
    expect(pun_view.subject).toEqual(subject);

  });

  it("should admonish me for being a dirty boy", function() {

    var alt_pun = "art";

    var dirty_boy_view = view.dirty_boy(alt_pun);
    var $ = this.cheerio.load(dirty_boy_view);

    expect($("#redirect").attr("href")).toEqual("/pun/" + alt_pun);

  });

  it("should admonish me for being a dirty boy JSON style", function() {

    var dirty_boy_view = view.dirty_boy(undefined, 'json');
    expect(dirty_boy_view.status).toEqual(406);

  });

  it("should tell me it has no idea what I'm on about", function() {

    var request = "porkchop%20sandwiches"
    var wtf_view = view.ewwow(request);
    // what do we want to test for?

  });

});