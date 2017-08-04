zn.define(function () {

    var CHARS = zn.char.getUppercaseLetters();

    return zn.Class({
        static: true,
        methods: {
            getTime: function (){
                return (new Date()).getTime();
            },
            generateCode: function (businessId, userId){
                var _time = this.getTime().toString().substring(1),
                    _businessId = businessId || 1;
                return _businessId.toString() + _time.toString() + Math.floor((Math.random()*9+1)*100);
            },
            getRandomNumber: function (){
                return Math.floor(Math.random()*10);
            },
            getRandomChar: function (){
                return CHARS[Math.floor(Math.random()*26)];
            },
            getRandomNumbers: function (){
                return Math.floor((Math.random()*9+1)*1000);
            },
            getRandomChars: function (){
                return (Math.random() / +new Date()).toString(36).replace(/\d/g, '').slice(1);
            }
        }
    });

});
