zn.define([
    'node:fs',
    'node:nodemailer'
], function (node_fs, node_nodemailer) {

    var example = {
        // Comma separated list of recipients
        to: 'Andris Reinman <andris.reinman@gmail.com>',

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ✔',

        // plaintext body
        text: 'Hello to myself!',

        // HTML body
        html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>',

        // An array of attachments
        attachments: [
            // String attachment
            {
                filename: 'notes.txt',
                content: 'Some notes about this e-mail',
                contentType: 'text/plain' // optional, would be detected from the filename
            },
            // Binary Buffer attachment
            {
                filename: 'image.png',
                content: Buffer.from(
                    'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                        '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                        'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                    'base64'
                ),
                cid: 'note@example.com' // should be as unique as possible
            }
        ]
    };

    return zn.Controller('mail',{
        methods: {
            init: function (){
                zn.plugin.admin.QQMailTransport = node_nodemailer.createTransport({
                    service: 'QQ',
                    secureConnection: true, // use SSL
                    port: 465, // port
                    auth: {
                        user: 'jimxyy@foxmail.com',
                        pass: 'ftezfvbvzeywbbcg'
                    }
                });
            },
            send: {
                method: 'GET/POST',
                argv: {
                    to: null,
                    subject: null,
                    html: null
                },
                value: function (request, response, chain){
                    var _message = zn.extend({ from: 'jimxyy@foxmail.com' }, request.getValue());
                    zn.plugin.admin.QQMailTransport.sendMail(_message, function (error, info){
                        if (error) {
                            zn.error('邮件发送失败：' + error.message);
                            response.error(error);
                        }else {
                            response.success(info);
                        }
                    });
                }
            }
        }
    });

});
