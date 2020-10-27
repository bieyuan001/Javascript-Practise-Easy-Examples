const colorBox = document.getElementById('color');
const resetZero = document.getElementById('reset');
const rangeR = document.getElementById('rangeRed');
const rangeG = document.getElementById('rangeGreen');
const rangeB = document.getElementById('rangeBlue');
const getRan = document.getElementById('getran');
rangeR.addEventListener('mousemove', () => {
	let colorNewVal = Number(rangeR.value);
	let colorNewVal1 = Number(rangeG.value);
	let colorNewVal2 = Number(rangeB.value);
	colorBox.style.backgroundColor = `rgb(${colorNewVal},${colorNewVal1},${colorNewVal2})`;
	document.getElementById('redCount').innerHTML=rangeR.value;
      });
rangeG.addEventListener('mousemove', () => {
	let colorNewVal = Number(rangeR.value);
	let colorNewVal1 = Number(rangeG.value);
	let colorNewVal2 = Number(rangeB.value);
	colorBox.style.backgroundColor = `rgb(${colorNewVal},${colorNewVal1},${colorNewVal2})`;
	document.getElementById('greenCount').innerHTML=rangeG.value;
      });
rangeB.addEventListener('mousemove', () => {
	let colorNewVal = Number(rangeR.value);
	let colorNewVal1 = Number(rangeG.value);
	let colorNewVal2 = Number(rangeB.value);
	colorBox.style.backgroundColor = `rgb(${colorNewVal},${colorNewVal1},${colorNewVal2})`;
	document.getElementById('blueCount').innerHTML=rangeB.value;
      });
resetZero.addEventListener('click', () => {
	rangeR.value = "0";
	rangeG.value = "0";
	rangeB.value = "0";
	document.getElementById('redCount').innerHTML="0";
	document.getElementById('greenCount').innerHTML="0";
	document.getElementById('blueCount').innerHTML="0";
	colorBox.style.backgroundColor = `rgb(0,0,0)`;
	  })
getRan.addEventListener('click', () => {
		rangeR.value = Math.round(Math.random()*255);
		rangeG.value = Math.round(Math.random()*255);
		rangeB.value = Math.round(Math.random()*255);
		document.getElementById('redCount').innerHTML=rangeR.value.toString();
		document.getElementById('greenCount').innerHTML=rangeG.value.toString();
		document.getElementById('blueCount').innerHTML=rangeB.value.toString();
		colorBox.style.backgroundColor = `rgb(${rangeR.value},${rangeG.value},${rangeB.value})`;
})// JavaScript Document