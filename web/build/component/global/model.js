module.exports = {
	dialogDelete: function dialogDelete(model, where, success, error) {
		zn.confirm('确定删除数据吗？', '提示', function () {
			zn.http.post('/zn.plugin.admin/model/delete', {
				model: model,
				where: where
			}).then(function (data) {
				zn.notification.success('删除成功！');
				callback && callback(data);
			}, function (data) {
				zn.notification.error('删除失败！');
				error && error(data);
			});
		});
	},
	dialogInsert: function dialogInsert(argv) {
		var _argv = zn.extend({ title: '添加', hiddens: {} }, argv);
		zn.dialog({
			title: _argv.title,
			content: React.createElement(zn.react.Form, {
				merge: 'values',
				action: '/zn.plugin.admin/model/insert',
				exts: zn.extend({ model: _argv.model }, _argv.exts),
				hiddens: _argv.hiddens,
				onSubmitSuccess: _argv.success,
				onSubmitError: _argv.error,
				items: _argv.formItems })
		});
	},
	dialogUpdate: function dialogUpdate(argv) {
		var _argv = zn.extend({ title: '修改' }, argv);
		zn.dialog({
			title: _argv.title,
			content: React.createElement(zn.react.Form, {
				merge: 'updates',
				action: '/zn.plugin.admin/model/update',
				exts: { model: _argv.model, where: _argv.where },
				value: _argv.value,
				items: _argv.formItems,
				onSubmitSuccess: _argv.success,
				onSubmitError: _argv.error })
		});
	}
};