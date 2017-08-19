'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _accolade = require('accolade');

var _accolade2 = _interopRequireDefault(_accolade);

var _app = require('../config/app.json');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

var accolade = (0, _accolade2.default)(_app2.default);

router.get('/', function (req, res) {
  res.send('Accolade sez hello');
});

router.post('/rate', function (req, res) {
  var match = accolade.createMatch(req.body);
  var result = match.rate();
  res.status(200).type('application/json').send(JSON.stringify(result, null, 2));
});

router.post('/quality', function (req, res) {
  var match = accolade.createMatch(req.body);
  var result = match.quality();
  res.status(200).type('application/json').send(JSON.stringify(result, null, 2));
});

module.exports = router;