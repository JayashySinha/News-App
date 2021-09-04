// All controller logic for CRUD operation will stay here

const newsModel = require('../model/news-model');

// Create and Save a new News
exports.create = (req, res) => {
    
    // validate request body

    // Creaate news

    // Save news in Database
 
};


// Retrieve and return all news from the database.
exports.findAll = (req, res) => {
   // TODO from below
};

// Find a single news with a newsId
exports.findOne = (req, res) => {
    
};

// Update a news identified by the newsId in the request
exports.update = (req, res) => {
    newsModel.updatenews(
        {title: req.params.NewsTitle},
        function(err){
          if (!err){
            res.send(req);
          } else {
            res.send(err);
          }
        }
      )
};

// Delete a news with the specified newsId in the request
exports.delete = (req, res) => {
    newsModel.deletenews(
        {title: req.params.NewsTitle},
        function(err){
          if (!err){
            res.send("Successfully deleted the corresponding News.");
          } else {
            res.send(err);
          }
        }
      );
};