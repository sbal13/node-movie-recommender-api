/**
 * Movies Controller
 */
const { Movie } = require('../db/sequelize.js')

class MoviesController {
  /**
   * Get all movies
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Promise<void>}
   */
  static async getMovies(req, res, next) {
    Movie.findAll()
    .then(movies => {
      res.status(200).json({
        status: 200,
        success: true,
        movies: movies
      });
    });
  }
  static async getMovieByTitle(req, res, next) {
    console.log(req.params);
    Movie.findAll({
    where: {
    title: req.params.title
  }
  })
    .then(movie => {
      res.status(200).json({
        status: 200,
        success: true,
        movies: movie
      });
    });
  }

  static async postMovies(req, res, next) {
    console.log(req.body)
    Movie.create(req.body)
    .then(movie => {
      res.status(200).json({
        status: 200,
        success: true,
        movie: movie
      })
    })
  }
}

module.exports = MoviesController;
