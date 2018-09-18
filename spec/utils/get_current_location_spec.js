describe("Testing get_user_current_location functions work as expected", function() {
  get_current_location = require('../../src/utils/get_current_location.js');

  beforeEach(function() {
    // player = new Player();
    // song = new Song();

  });

  it("Should return current location", function() {
    let res = spyOn(get_current_location.getCurrentLocation).and.callFake(function() {
         var position = { coords: { latitude: 51.509865, longitude: -0.118092 } };
         arguments[0](position);
    });
    expect(res).toEqual("lat:" + 51.509865 + " lng:" + -0.118092);

  });

});
