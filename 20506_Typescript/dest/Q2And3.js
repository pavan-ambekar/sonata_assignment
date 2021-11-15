"use strict";
var numArray = [543, 7, 4, 2, 123, 23, 634, 34, 6, 34, 32, 4];
//Define an array and check if it contains a specific value.
var index = numArray.indexOf(4);
index > -1 ? console.log("Number present at index: " + index) : console.log("Value Not Found");
var reverseNumArray = numArray;
reverseNumArray.reverse();
console.log(reverseNumArray);
