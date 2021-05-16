var moment = require("moment");

var myDiv = document.getElementById('date');
var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");

myDiv.innerHTML = myCoolDate;

