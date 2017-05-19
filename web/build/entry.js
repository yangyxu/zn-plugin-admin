'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(React.createElement(UI.URLRouter, { home: '/', routers: require('./router.js') }), document.getElementById('container'));