zn.define(function () {

    return zn.Controller('var',{
        properties: {

        },
        methods: {
            init: function (args){
                this._action = this.action('AdminVar');
            },
            getAllByPid: {
                method: 'GET/POST',
                argv: {
                    pid: null,
                    fields: 'id as value, title as text'
                },
                value: function (request, response, chain){
                    this._store.query("select {0} from zn_admin_var where locate(',{1},', parentPath)<>0;".format(request.getValue('fields'), request.getValue('pid'))).then(function (data){
                        response.success(data);
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
                    this._action.select(request.getValue('fields'), 'pid='+request.getValue('pid'), request.getValue('order')).then(function(data){
                        response.success(data);
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
                    this._action.select(request.getValue('fields'), 'pid in (' + request.getValue('pids') + ')', request.getValue('order')).then(function(data){
                        response.success(data);
                    });
                }
            },
            getByOrderPids: {
                method: 'GET/POST',
                argv: {
                    pids: null,
                    fields: 'id as value, title as text'
                },
                value: function (request, response, chain){
                    this._action.select(request.getValue('fields'), 'pid in (' + request.getValue('pids') + ')', request.getValue('order')).then(function(data){
                        response.success(data);
                    });
                }
            }
        }
    });

});
