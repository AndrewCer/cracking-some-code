var string01 = require('../string-01-04');

describe('replace', function () {
  it('replace internal space with "%20"', function () {
    var string = "Mr John Smith    "
    var output = 'Mr%20John%20Smith'
    expect(string01(string)).toEqual(output)
  })
});
