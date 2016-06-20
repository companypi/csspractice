module.exports = function(){

var mongoose 	= require('mongoose');
var db 			= require('../../config/env/production.js');
var Schema 		= mongoose.Schema;

// Schema for something page
var somethingSchema = new Schema({
  	somethingData:{
		type: String,
		default: 'Unknown something'
	}
});

var _model = mongoose.model('something', somethingSchema);

	// Add a new message
	_save = function(req, success, fail) {
		var newSomething = new _model({
			something  : req.something
		});

		newSomething.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				success(doc);
			}
		})
	};

	// Getting all messages
	_findAll = function(success, fail ){
		_model.find({}, function(err, doc){
			if(err){
				fail(err);
			}else{
				success(doc);
			}
		})
	};
// returning all functions above here.
return{
	schema  : somethingSchema,
	add 	: _save,
    findAll : _findAll
}

}();