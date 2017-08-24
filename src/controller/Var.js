zn.define(function () {

    var MODEL = 'ZNPluginAdminVar';

    return zn.Controller('var',{
        methods: {
            getAllByPid: {
                method: 'GET/POST',
                argv: {
                    pid: null,
                    fields: ''
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    _values.where = "locate(',{0},', zn_tree_parent_path)<>0".format(_values.pid);
                    _values.order = {
                        zn_tree_order: 'asc'
                    }
                    this.collection(MODEL)
                        .select(_values)
                        .then(function (data){
                            response.success(zn.data.arrayToTree(data));
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            getByPid: {
                method: 'GET/POST',
                argv: {
                    pid: null,
                    fields: 'id as value, zn_title as text'
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    _values.where = 'zn_tree_pid=' + (_values.pid || -1);
                    _values.order = {
                        zn_tree_order: 'asc'
                    }
                    this.collection(MODEL)
                        .select(_values)
                        .then(function (data){
                            response.success(data);
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            getByPids: {
                method: 'GET/POST',
                argv: {
                    pids: null,
                    fields: 'id as value, zn_title as text'
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    _values.where = 'zn_tree_pid in (' + _values.pid + ')';
                    this.collection(MODEL)
                        .select(_values)
                        .then(function (data){
                            response.success(data);
                        }, function (err){
                            response.error(err);
                        });
                }
            }
        }
    });

});
