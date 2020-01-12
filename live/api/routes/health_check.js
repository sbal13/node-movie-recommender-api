const router = require('express').Router();

require('express-group-routes');

const HealthCheckController = require('./../controllers/health_check_controller');

router.group('/api/v1', (r) => {
  r.get('/healthcheck', HealthCheckController.getHealthCheck);
});

module.exports = router;
