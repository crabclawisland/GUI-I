/*
 * 
 * Alex Nevers
 * 
 * Gui I
 * 
 * Jquery for tab interface
 * 
 * edited 11/19/2015
 */



var tabnum = 1;             /*tab index */
var totaltabs = 1;          /*how many we've had total */
var tabs = $("#tabs").tabs();


$(document).ready(function ($) {

    //set up tabs, make enwest tab active

    $("#tabs").tabs();
    $("#tabs").bind("tabsselect", function (e, tab) {
        activetab = tab.index;
    });
});


function Addtab() {

    //increase index num and total num
    tabnum++;
    totaltabs++;

    /* create new tab adn container div ids */
    $("#tablist").append("<li><a href='#tab" + totaltabs + "'> Table " + totaltabs +
            "</a><span class='ui-icon ui-icon-circle-close ui-closable-tab'></span></li>");

    $("#tabs").append("<div id='tab" + totaltabs + "'>"
            + "<div id='multtable" + totaltabs + "'></div>");

    $("#tabs").tabs("refresh");
    $("#tabs").tabs({active: (tabnum - 1)});
}

/*closeable tab buttons adjusted from here: */
/* http://stackoverflow.com/questions/14357614/add-close-button-to-jquery-ui-tabs */

$(".ui-closable-tab").live("click", function () {

    if (tabnum > 1) {
        var tabContainerDiv = $(this).closest(".ui-tabs").attr("id");
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        $("#" + tabContainerDiv).tabs("refresh");
        tabnum--;
    }
});

