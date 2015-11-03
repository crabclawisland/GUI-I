 /* Alex Nevers
  * Gui I
  * 11/3/2015
  * Jquery validation file for mult table using validation plugin
  * */
  
 
 
 
 $(document).ready(function () {

//ready the variables

                var n1 = $('#n1').val();
                var n2 = $('#n2').val();
                var n3 = $('#n3').val();
                var n4 = $('#n4').val();

                n1 = parseInt(n1);
                n2 = parseInt(n2);
                n3 = parseInt(n3);
                n4 = parseInt(n4);
//begin form validaation

                $("#form").validate({
                 //set all inputs to be required digits from 1 to 999
                    rules: {
                        n1: {
                            required: true,
                            digits: true,
                            maxlength: 3
                        },
                        n2: {
                            required: true,
                            digits: true,
                            maxlength: 3
                        },
                        n3: {
                            required: true,
                            digits: true,
                            maxlength: 3
                        },
                        n4: {
                            required: true,
                            digits: true,
                            maxlength: 3
                        }
                    },
                    groups: {
                        numbers: "n1 n2 n3 n4"
                    },
                    errorPlacement: function (error, element) {
                        (error).appendTo($(".errors"));
                    }   
                });
//do not refresh page, validate and submit to multiply
                $("form").click("submit", function (e) {
                    e.preventDefault();
                    var isvalidate = $("#form").valid();
                    if (isvalidate) {
                        Multiply();
                    }
                });
            });
