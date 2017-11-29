zn.define(function () {

    return zn.Controller('table',{
        methods: {
            selectOne: {
                method: 'GET/POST',
                argv: {
                    table: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    this.query(zn.sql.select(_values))
                        .then(function(data){
                            response.success(data.length?data[0]:null);
                        }, function (data){
                            response.error(data);
                        });
                }
            },
            select: {
                method: 'GET/POST',
                argv: {
                    table: null,
                    ifRights: 0
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    this.query(zn.sql.select(_values))
                        .then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                }
            },
            paging: {
                method: 'GET/POST',
                argv: {
                    table: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    this.query(zn.sql.paging(_values))
                        .then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                }
            },
            insert: {
                method: 'GET/POST',
                argv: {
                    table: null,
                    values: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    this.query(zn.sql.insert(_values))
                        .then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                }
            },
            update: {
                method: 'GET/POST',
                argv: {
                    table: null,
                    updates: null,
                    where: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    this.query(zn.sql.update(_values))
                        .then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                }
            },
            delete: {
                method: 'GET/POST',
                argv: {
                    table: null,
                    where: null
                },
                value: function (request, response, chain){
                    var _values = request.getValue();
                    this.query(zn.sql.delete(_values))
                        .then(function(data){
                            response.success(data);
                        }, function (data){
                            response.error(data);
                        });
                }
            }
        }
    });
});
