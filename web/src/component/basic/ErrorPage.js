require('./ErrorPage.less');
var React = require('react');
module.exports = React.createClass({
	render:function(){
		return (
			<div className="zn-plugin-admin-error-page">
				<div className="alert">
					<h1>
						<div className="l12n">This Connection Is Not Private</div>
					</h1>
				</div>
				<div className="alert-body">

				</div>
				<div className="details">
					<p id="detailsText">
						<p>Safari warns you when a website has a certificate that is not valid. This may happen if the website is misconfigured or an attacker has compromised your connection.</p>
							<p>To learn more, you can
								<a role="button" onclick="CertificateWarningController.showCertificateInformation();">view the certificate</a>
								. If you understand the risks involved, you can <a role="button" onclick="CertificateWarningController.visitInsecureWebsite();">visit this website</a>.
							</p>
						</p>
				</div>
			</div>
		);
	}
});
