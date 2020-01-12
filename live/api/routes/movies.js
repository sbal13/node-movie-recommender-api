const router = require('express').Router();

require('express-group-routes');

const MoviesController = require('./../controllers/movies_controller');

router.group('/api/v1', (r) => {
  r.get('/movies', MoviesController.getMovies);
});

module.exports = router;