"use strict";

require('./ErrorPage.less');

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement("div", {
      className: "zn-plugin-admin-error-page"
    }, React.createElement("div", {
      className: "alert"
    }, React.createElement("h1", null, React.createElement("div", {
      className: "l12n"
    }, "This Connection Is Not Private"))), React.createElement("div", {
      className: "alert-body"
    }), React.createElement("div", {
      className: "details"
    }, React.createElement("p", {
      id: "detailsText"
    }, React.createElement("p", null, "Safari warns you when a website has a certificate that is not valid. This may happen if the website is misconfigured or an attacker has compromised your connection."), React.createElement("p", null, "To learn more, you can", React.createElement("a", {
      role: "button",
      onclick: "CertificateWarningController.showCertificateInformation();"
    }, "view the certificate"), ". If you understand the risks involved, you can ", React.createElement("a", {
      role: "button",
      onclick: "CertificateWarningController.visitInsecureWebsite();"
    }, "visit this website"), "."))));
  }
});