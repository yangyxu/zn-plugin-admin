zn.define(function () {

    return zn.Controller('role',{
        methods: {
            getRoleUsers: {
                method: 'GET/POST',
                argv: {
                    role: null
                },
                value: function (request, response, chain){
                    var _role = request.getValue('role');
                    this.beginTransaction()
                        .query('Select Users: ', function (){
                            return zn.sql.select({
                                table: 'zn_plugin_admin_user',
                                fields: 'id as value, name as text, first_char, avatar_img',
                                where: "locate(',"+_role+",', role_ids)<>0"
                            });
                        }, function (err, data){
                            if(err){
                                response.error(err);
                            }else {
                                response.success(data)
                            }
                        })
                        .commit();
                }
            }
        }
    });

});
