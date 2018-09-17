const assert = require('assert');
const GenerateDomId = require('../generate_dom_id');

describe('test for GenerateDomId', function() {

  it('test toString', function () {
    var gen = new GenerateDomId('main');
    for (var i = 0; i < 100; i++) {
      assert.ok('<div id='+gen+'></div>' === '<div id=main_'+(i+1)+'></div>');
    }
  });

  it('test get', function () {
    var gen = new GenerateDomId('main');
    for (var i = 0; i < 100; i++) {
      var id = gen.inc();
      assert.ok('<div id='+id+'></div>' === '<div id=main_'+(i+1)+'></div>');
    }
  });

  it('test getSub', function () {
    var gen = new GenerateDomId('main');
    gen.inc();
    var gen_1 = gen.getSub();
    for (var i = 0; i < 100; i++) {
      assert.ok('<div id='+gen_1+'></div>' === '<div id=main_1_'+(i+1)+'></div>');
    }

    gen.inc();
    var gen_2 = gen.getSub();
    for (var i = 0; i < 100; i++) {
      assert.ok('<div id='+gen_2+'></div>' === '<div id=main_2_'+(i+1)+'></div>');
    }
  });
});