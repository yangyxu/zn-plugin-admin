zn.define(function () {

    return zn.Controller('document',{
        methods: {
            init: function (args){
                this._action = this.action('AdminDocument');
            },
            uploadDocument: {
                method: 'GET/POST',
                argv: {
                    catelogId: null
                },
                value: function (request, response, chain){

                }
            }
        }
    });

});
