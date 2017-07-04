zn.define(function () {

    return zn.Controller('var',{
        methods: {
            getAllByPid: {
                method: 'GET/POST',
                argv: {
                    pid: null,
                    fields: 'id as value, title as text'
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    _values.where = "locate(',{0},', parentPath)<>0".format(_values.pid);
                    this.collection('AdminVar')
                        .select(_values)
                        .then(function (data){
                            response.success(data);
                        }, function (err){
                            response.error(err);
                        });
                }
            },
            getByPid: {
                method: 'GET/POST',
                argv: {
                    pid: null,
                    fields: 'id as value, title as text'
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    _values.where = 'pid=' + _values.pid;
                    this.collection('AdminVar')
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
                    fields: 'id as value, title as text'
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    _values.where = 'pid in (' + _values.pid + ')';
                    this.collection('AdminVar')
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
