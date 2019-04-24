zn.define(['node:fs', 'node:path'], function (node_fs, node_path) {

    return zn.Controller('icon',{
        methods: {
            getFontAwesomes: {
                method: 'GET',
                value: function (request, response, chain){
                    var _filepath = './web/www/css/font-awesome.css';
                    var _realpath = node_path.join(process.cwd(), _filepath);
                    var _content = node_fs.readFileSync(_realpath, 'utf8');
                    var _ary = _content.split('\n'),
                        _values = [];
                    _ary.map(function(item, index){
                        if(item.indexOf('.fa-')==0 && item.indexOf(':before')!=-1){
                            _values.push(item.substring(1, item.indexOf(':before')));
                        }
                    });
                    response.success(_values);
                }
            }
        }
    });

});
