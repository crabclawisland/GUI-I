/*
 * Alex Nevers
 * GUI I
 * JS for sliders
 * 
 * edited 11/19/2015
 */



$(document).ready(function () {
    $("#slider").slider({
        range: "min",
        min: 1,
        max: 999,
        value: 5,
        slide: function (event, ui) {
            $("#n1").val(ui.value);
        }
    });
    $("#n1").val($("#slider").slider("value"));
});

$(document).ready(function () {
    $("#slider2").slider({
        range: "min",
        min: 1,
        max: 999,
        value: 10,
        slide: function (event, ui) {
            $("#n2").val(ui.value);
        }
    });
    $("#n2").val($("#slider").slider("value"));
});

$(document).ready(function () {
    $("#slider3").slider({
        range: "min",
        min: 1,
        max: 999,
        value: 15,
        slide: function (event, ui) {
            $("#n3").val(ui.value);
        }
    });
    $("#n3").val($("#slider3").slider("value"));
});

$(document).ready(function () {
    $("#slider4").slider({
        range: "min",
        min: 1,
        max: 999,
        value: 20,
        slide: function (event, ui) {
            $("#n4").val(ui.value);
        }
    });
    $("#n4").val($("#slider4").slider("value"));

});

$("#n1").on("input", function() {
   var numberInput = (this).val();
  $("#slider").slider('option', 'value', numberInput);
});

$("input[type='number']").keyup(function (event) {

    var numberInput = parseInt($(this).val());
    
    if (this.id === "n1") {
        $("#slider").slider('option', 'value', numberInput);
    }

    if (this.id === "n2") {
        $("#slider2").slider('option', 'value', numberInput);
    }

});