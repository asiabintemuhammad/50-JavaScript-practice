//js
// ex-1
function showDate(){
	document.getElementById('showDate').innerHTML=Date();
}
// ex-2
function sDate(){
	document.getElementById('sDate').innerHTML=Date();
}
// ex-3
function sText(){
	document.getElementById('sText').innerText="Hello people!";
}
// ex-4
function bulbOn(){
  document.getElementById('bulb').src="img/bulbon.gif";
}
function bulbOff(){
  document.getElementById('bulb').src="img/bulboff.gif";
}
// ex-5
function styleChange(){
	document.getElementById('sChange').style.fontSize="50px";
}
// ex-6
function showImg(){
  document.getElementById('img').style.display="block";
}
function hideImg(){
  document.getElementById('img').style.display="none";
}
// ex-7
function sT(){
  document.getElementById('s_hText').style.display="block";
}
function hT(){
  document.getElementById('s_hText').style.display="none";
}
// ex-8
function dW(){
document.write(7+9);
}
// ex-9
function winAlert(){
window.alert(7+9);
}
// ex-10
function conLog(){
console.log(7+9);
}
//ex-11
function winPrint(){
  window.print();
}
// ex-12
function vOut(){
  var num1=11;
  var num2=12;
  var result=(num1+num2);
document.getElementById("voutput").innerHTML=result;

}
// ex-13
function lOut(){
  let num1=11;
  let num2=12;
  let result=(num1+num2);
document.getElementById("loutput").innerHTML=result;

}
// ex-14
function cnOut(){
  const num1=500;
  const num2=20;
  let result=(num1/num2);
document.getElementById("cnoutput").innerHTML=result;

}
// ex-15
function sData(){
  let name= 'Asia Binte Muhammad';
  let age= 20;
document.getElementById("showvar").innerHTML= "my name is "+ name + "." + " I am " + age + " years old" ;

}
// ex-16
function shData(){
  let name= 'Asia Binte Muhammad',age= 20;
  
document.getElementById("svar").innerHTML= "my name is "+ name + "." + " I am " + age + " years old" ;

}
// ex-17
function arrayData(){
  const data=[
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas', 
  'California', 
  'Colorado'
 ]; 
document.getElementById("arrayoutput").innerHTML=data[5] ;

}
// ex-18
function arrayToString(){
  const data=[
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas', 
  'California', 
  'Colorado'
 ]; 
document.getElementById("arraytostring").innerHTML=data.toString() ;

}

// ex-19
function dataName(){
  const states=[
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas', 
  'California', 
  'Colorado'
 ]; 
document.getElementById("arraydname").innerHTML=states ;

}
// ex-20
function lProperty(){
  const states=['Alabama','Alaska','Arizona','Arkansas', 'California','Colorado']; 
 let size= states.length;
document.getElementById("lp").innerHTML= size ;

}
// ex-21
function lProperty2(){
  const states=['Alabama','Alaska','Arizona','Arkansas', 'California','Colorado']; 
 states.length=3;
document.getElementById("lp2").innerHTML=states  ;
}
// ex-22
function lOut1(){
  let num1=11;
  let num2=12;
  let result=(num1*num2);
document.getElementById("loutput1").innerHTML=result;

}
// ex-23
function lOut2(){
  let num1=11;
  let num2=12;
  let result=(num1/num2);
document.getElementById("loutput2").innerHTML=result;

}
// ex-24
function lOut3(){
  let num1=11;
  let num2=12;
  let result=(num1-num2);
document.getElementById("loutput3").innerHTML=result;

}
// ex-25
function lOut4(){
  let num1=11;
  let num2=12;
  let result=(num1%num2);
document.getElementById("loutput4").innerHTML=result;

}
//ex-26
function boldText() {
    document.getElementById('bold').style.fontWeight = "bold";
}
//ex-27
function italicText() {
    document.getElementById('italic').style.fontStyle = "italic";
}
//ex-28
function underlineText() {
    document.getElementById('under').style.textDecoration = "underline";
}
//ex-29
function alignTextLeft() {
    document.getElementById('alignText').style.textAlign = "left";
}

function alignTextRight() {
    document.getElementById('alignText').style.textAlign = "right";
}
//ex-30
function updateDate() {
    document.getElementById('date').innerHTML = new Date().toLocaleDateString();
}
//ex-31
function addNumbers() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('sum').innerHTML = num1 + num2;
}
//ex-32
function subtractNumbers() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML = number1 - number2;
}
//ex-33
function showTime() {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}
//ex-34
function capitalizeText() {
    let input = document.getElementById('textInput').value;
    document.getElementById('capitalizedText').innerHTML = input.toUpperCase();
}
//ex-35
function smallText() {
    let input = document.getElementById('textIn').value;
    document.getElementById('smallText').innerHTML = input.toLowerCase();
}
//ex-36
let count = 0;
function countClicks() {
    count++;
    document.getElementById('clickCounter').innerHTML = "Button clicked " + count + " times.";
}
//ex-37
function changeTextBgColor() {
    document.getElementById('textBg').style.backgroundColor = "lightblue";
}
//ex-38
function changeTextColor() {
    document.getElementById('colorText').style.color = "green";
}
//ex-39
function addText() {
    document.getElementById('addText').innerHTML += " Asia Binte Muhammad.";
}

function clearText() {
    document.getElementById('addText').innerHTML = "";
}
//ex-40
function showAlert() {
    alert(" hello!! I am Asia Binte Muhammad!");
}
//ex-41
function changeButtonText() {
    document.getElementById('button').innerHTML = "Thank You!";
}
//ex-42
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
function getDay(){
    document.getElementById("day").innerHTML = "Today is "+ day +".";
}
//ex-43
let aa = 44;
let bb = aa++;
function poIncrement(){
    document.getElementById("POincrement").innerHTML = aa;
}
// ex-44
let cc = 33;
let dd = ++cc;
function pIncrement(){
    document.getElementById("pIncrement").innerHTML = cc;
}
//ex-45
let xx = 44;
let yy = xx--;
function poDecrement(){
    document.getElementById("POdecrement").innerHTML = xx;
}
// ex-46
let pp = 33;
let qq =--pp;
function pDecrement(){
    document.getElementById("pdecrement").innerHTML = pp;
}
//ex-47
let Num1 = 100;
    Num1 %= 3;
function modUlus(){
    document.getElementById("Modulus").innerHTML =  Num1;
}
//ex-48
let x = 6;
let y = 3;
let result1 = (x < 10 && y < 1);
function andOp(){
    document.getElementById("ANDOP").innerHTML = "Result is " + result1; 
}
//ex-49
let p = 6;
let q = 3;
let result2 = (p < 10 && q < 4);
function andOp2(){
    document.getElementById("ANDOP2").innerHTML = "Result is " + result2; 
}
//ex-50
let a = 5;
let b = 9;
let c = (a > 0 || b > 0);
function orOp(){
document.getElementById("ORop").innerHTML = c;
}