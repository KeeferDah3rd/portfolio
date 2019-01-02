'use strict';

//hamburger menu
let ninja = $(".menuitem").hide(); // Makes a varable to hide the menu
//Makes a pull down menu for the hamburger menu
$(".menutog").click(function () { // selects the target that holds the menu
    $(".submenu").val(ninja); // set hide as default
    $(".menuitem").slideToggle("fast"); // Tell the page what pulls down from the menu
});

//$(document).ready(function () {
//    $("button").click(function () {
//        $(".merch").toggle();
//    });
//});

//mechendice hiding
let nope = $(".merch").hide(); // Makes a varable to hide the merch
//Makes the merch apper
$("button").click(function () { // selects the target that holds the merch
    $(".submenu").val(nope); // set hide as default
    $(".merch").slideToggle("fast"); // Tell the page what pulls down from the button
});
