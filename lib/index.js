
module.exports = function(Model) {

  //
  // Set values using a object that support toJSON
  Model.prototype.setFrom = function setFrom(obj){
    var source = obj;
    if (obj.toJSON) source = obj.toJSON();
    this.set(source)
  }
};