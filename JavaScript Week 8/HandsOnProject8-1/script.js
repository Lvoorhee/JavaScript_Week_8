// Lucas Voorhees
// 12/18/2020

'use strict';

var newAccountArray = [];

function createID() {
   var fname = document.getElementById("fnameinput");
   var lname = document.getElementById("lnameinput");
   var zip = document.getElementById("zipinput");
   var account = document.getElementById("accountidbox"); 
   var fields = document.getElementById("input");
   var acctid;
   var firstInit;
   var lastInit;

   if(fname != "" && lname !="" && zip !="") {

   firstInit = fname.value.charAt(0).toUpperCase();
   lastInit = lname.value.charAt(0).toUppercase();
   acctid = firstInit + lastInit + zip.value;
   account.value = acctid;
   newAccountArray = [];
   for(var i = 0; i < fields.length - 1; i++) {
       newAccountArray.push(fields[i].value);
   }
}
}


function createEventListeners() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    if (fname.addEventListener) {
        fname.addEventListener("change", createID, false);
        lname.addEventListener("change", createID, false);
        zip.addEventListener("change", createID, false);
    } else if (fname.attachEvent) {
        fname.attachEvent("onchange", createId);
        lname.attachEvent("onchange", createId);
        zip.attachEvent("onchange", createId);
    }
    }
    if (window.addEventListener) {
        window.addEventListener("load", createEventListeners, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", createEventListeners);
    }

   





    



