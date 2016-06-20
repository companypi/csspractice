module.exports = function(app){
    var express = require('express');
    var router = express.Router();
    var Something = require('./models/something');
// ===================================================================
// =============================== Gigs ==============================
// ===================================================================

// // Read All
app.get('/api/somethings', function(req, res) {
    Something.findAll(function(data) {
      res.status(200).json(data);
    });
});
// // Create
// app.post('/api/somethings', function(req, res) {
//     something.add(req.body, function(doc){
//         res.send(doc);
//     });
// });

//  // Read One
// app.get('/api/somethings/:groupId', function(req, res) {
//     something_id = req.params.groupId;
//     something.findOne({_id:something_id},function(doc) {
//             res.status(200).json(doc);
//     });
// });

// // Delete One
// app.delete('/api/somethings/:id', function(req, res) {
//     objectId = req.params.id;
//     something.remove({_id:objectId},function(doc){
//         res.status(200).json("doc in api",doc);
//     });
// });


return app;
};