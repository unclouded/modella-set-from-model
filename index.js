var setFrom = require('./lib')

//
// Extends a modella model to allow set from objects that support toJSON() (i.e. other modella models)
//
module.exports = function(Model) {
  Model.use(setFrom)
}


