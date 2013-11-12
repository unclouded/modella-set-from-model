
describe('SetFrom plugin', function(){
  var expect = require('expect.js')
  var model = require('modella');
  var setFrom = require('../');

  var TestModel;

  beforeEach(function(){
    TestModel = model('TestModel');

    TestModel
      .use(setFrom)
      .attr('title', {type: 'string'})
  })


  it('should set value if object does not provide toJSON', function(){
    var test = new TestModel();
    expect(test).to.be.ok();

    var source = { title: 'no toJSON()'};
    test.setFrom(source);
    expect(test.title()).to.equal(source.title)
  })

  it('should set value if object provides toJSON', function(){
    var test = new TestModel();
    expect(test).to.be.ok();

    var source = {
      title: 'ignore me',
      toJSON: function(){
        return { title: 'from toJSON()'}
      }
    };

    test.setFrom(source);
    expect(test.title()).to.equal(source.toJSON().title)
  })
});