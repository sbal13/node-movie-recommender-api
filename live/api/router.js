const express = require('express');
const fs = require('fs');

/**
 * Load routes, which are described in separate files inside the 'api/routes'
 * directory
 *
 * @param {Object} router
 * @returns {Object} Express router instance
 */
function loadRoutes(router) {
  const routesPath = `${__dirname}/routes`;

  if (!fs.existsSync(routesPath)) {
    throw new Error("'routes' directory doesn't exist");
  }

  fs.readdirSync(routesPath).forEach((file) => {
    router.use(require(`${routesPath}/${file}`)); // eslint-disable-line global-require, import/no-dynamic-require
  });

  return router;
}

/** @class */
class Router {
  /**
   * Initialize all routes
   *
   * @returns {Object} Express router instance
   */
  init() {
    return loadRoutes(express.Router());
  }
}

module.exports = new Router();
