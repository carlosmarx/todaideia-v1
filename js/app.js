function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function postContactToGoogle(){
        var name = $('#name').val();
        var email = $('#email').val();
        $('#btn-submit').addClass('disabled');
        $('#btn-submit').html('Enviando...');
        if ((name !== "")  && (email !== "") && (validateEmail(email))) {
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSekJSRNknbBj_KJ3DFGkQsTmanjAGbuHOg8Rs6o2Qgt_Z3TXw/formResponse",
                data: {"entry.1027510664" : name, "entry.799105649" : email},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
 
                        $('#name').val("");
                        $('#email').val("");
                        //Success message
                    },
                    200: function (){
                        $('#name').val("");
                        $('#email').val("");
                        //Success Message
                    }
                }
            }).always(function(){
                $('.box-one').css('display','none');
                $('.box-two').css('display','block');
                $('#btn-submit').removeClass('disabled');
                $('#btn-submit').html('Concorrer');
              });
        }
        else {
            $('#btn-submit').removeClass('disabled');
            $('#btn-submit').html('Concorrer');
            $('#error-email').css('display', 'block');
        }
    }

    $('#form-pre-cadastro').submit(function() {
    postContactToGoogle();
    return false;
});