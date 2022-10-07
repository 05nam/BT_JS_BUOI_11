//* Bai__05
/**
 * input: nhap vao so co 2 chu so
 * var a=15,16,17,20....
 * 
 * lay hang chuc:  var layHangChuc=a/10
 * lay hang don vi: var layHangDonVi=a%10
 * 
 * 
 * output: 
 *  
 */

var number=16;
var layHangChuc=0;
var layHangDonVi=0;
var total=0;

layHangChuc= Math.floor(number/10);
layHangDonVi=number%10;
total=layHangChuc+layHangDonVi;


console.log("Bai_05____Hang chuc",layHangChuc);
console.log("Bai_05____ Don Vi",layHangDonVi);
console.log("Bai_05____ Tong",total);