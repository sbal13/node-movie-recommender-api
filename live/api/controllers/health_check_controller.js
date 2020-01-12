/**
 * HealthCheckController
 */
class HealthCheckController {
  /**
   * Generates a successful health check response.
   *
   * @param {Object} req
   * @param {Object} res
   *
   * @returns {Promise<void>}
   */
  static async getHealthCheck(req, res, next) {
    return res.status(200).json({
        data,
        status: 200,
        success: true
      });
  }
}

module.exports = HealthCheckController;
