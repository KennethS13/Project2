var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Meme.findAll({}).then(function(dbMemes) {
      res.json(dbMemes);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Meme.create(req.body).then(function(dbMemes) {
      res.json(dbMemes);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Meme.destroy({ where: { id: req.params.id } }).then(function(dbMemes) {
      res.json(dbMemes);
    });
  });
};
