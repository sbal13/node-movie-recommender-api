const router = require('express').Router();

require('express-group-routes');

const MoviesController = require('./../controllers/movies_controller');

router.group('/api/v1', (r) => {
  r.get('/movies', MoviesController.getMovies);
  r.get('/movies/:title', MoviesController.getMovieByTitle);
  r.post('/movies', MoviesController.postMovies);
});

module.exports = router;
