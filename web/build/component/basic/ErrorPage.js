"use strict";

require('./ErrorPage.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zn-plugin-admin-error-page"
    }, /*#__PURE__*/React.createElement("div", {
      className: "alert"
    }, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("div", {
      className: "l12n"
    }, "This Connection Is Not Private"))), /*#__PURE__*/React.createElement("div", {
      className: "alert-body"
    }), /*#__PURE__*/React.createElement("div", {
      className: "details"
    }, /*#__PURE__*/React.createElement("p", {
      id: "detailsText"
    }, /*#__PURE__*/React.createElement("p", null, "Safari warns you when a website has a certificate that is not valid. This may happen if the website is misconfigured or an attacker has compromised your connection."), /*#__PURE__*/React.createElement("p", null, "To learn more, you can", /*#__PURE__*/React.createElement("a", {
      role: "button",
      onclick: "CertificateWarningController.showCertificateInformation();"
    }, "view the certificate"), ". If you understand the risks involved, you can ", /*#__PURE__*/React.createElement("a", {
      role: "button",
      onclick: "CertificateWarningController.visitInsecureWebsite();"
    }, "visit this website"), "."))));
  }
});