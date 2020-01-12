/**
 * Movies Controller
 */
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
    return res.status(200).json({
        message: 'Movies Test',
        status: 200,
        success: true
      });
  }
}

module.exports = MoviesController;
