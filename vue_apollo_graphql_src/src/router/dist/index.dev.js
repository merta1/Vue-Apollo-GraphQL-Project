"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _CodesOfConduct = _interopRequireDefault(require("../views/CodesOfConduct.vue"));

var _MarketPlace = _interopRequireDefault(require("../views/MarketPlace.vue"));

var _IssueComments = _interopRequireDefault(require("../views/IssueComments.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/codesOfConduct',
  name: 'codesOfConduct',
  component: _CodesOfConduct["default"]
}, {
  path: '/marketPlace',
  name: 'marketPlace',
  component: _MarketPlace["default"]
}, {
  path: '/issueComments',
  name: 'issueComments',
  component: _IssueComments["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;