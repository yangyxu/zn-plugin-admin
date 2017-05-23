module.exports = zn.deepEachObject({
	'/znadmin/Menu': './view/Menu.js',
	'/znadmin/MyInfo': './view/MyInfo.js',
	'/znadmin/Project': './view/Project.js',
	'/znadmin/User': './view/User.js',
	'/znadmin/UserInfo': './view/UserInfo.js',
	'/znadmin/UserLog': './view/UserLog.js',
	'/znadmin/UserForRoles': './view/UserForRoles.js',
	'/znadmin/Role': './view/Role.js',
	'/znadmin/Var': './view/Var.js'
}, function (value, index, item) {
	return require(value);
});
