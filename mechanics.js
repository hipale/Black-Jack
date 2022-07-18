play()
function wybierz() {
	document.getElementById("hp").innerHTML = parseInt(document.getElementById("hp").innerHTML) + parseInt(event.target.value);
	event.target.value = Math.floor(Math.random() * (10 + 6) -6);
	
	document.getElementById("licznik").innerHTML = parseInt(document.getElementById("licznik").innerHTML) + 1;
		do {event.target.value = Math.floor(Math.random() * (10 + 6) - 6)}
		while ( event.target.value == 0);
		
		if (document.getElementById("hp").innerHTML > 21 || document.getElementById("hp").innerHTML < -21) { 
gameOver()
 document.getElementById("butt1").onclick = "";
 document.getElementById("butt2").onclick = "";
 document.getElementById("butt3").onclick = "";
 document.getElementById("butt4").onclick = "";
}
if (document.getElementById("butt1").value > 0) {
document.getElementById("butt1").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt1").value < 0) {
document.getElementById("butt1").style.backgroundColor = "#2973b8";
}
if (document.getElementById("butt2").value > 0) {
document.getElementById("butt2").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt2").value < 0) {
document.getElementById("butt2").style.backgroundColor = "#2973b8";
}
if (document.getElementById("butt3").value > 0) {
document.getElementById("butt3").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt3").value < 0) {
document.getElementById("butt3").style.backgroundColor = "#2973b8";
}
if (document.getElementById("butt4").value > 0) {
document.getElementById("butt4").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt4").value < 0) {
document.getElementById("butt4").style.backgroundColor = "#2973b8";
}
console.log(event.target.value);
	}

 function play() {
	 document.getElementById("hp").innerHTML = 0;
	 let num = [document.getElementById("butt1").value, document.getElementById("butt1").value, document.getElementById("butt1").value,
document.getElementById("butt1").value ]

document.getElementById("butt1").value = Math.floor(Math.random() * 10);
document.getElementById("butt2").value = Math.floor(Math.random() * 10);
document.getElementById("butt3").value = Math.floor(Math.random() * 10);
document.getElementById("butt4").value = Math.floor(Math.random() * 10);
if (Math.floor(Math.random() * 2) == 1) {
	document.getElementById("butt1").value = document.getElementById("butt1").value * -1
} else {
	document.getElementById("butt1").value = document.getElementById("butt1").value * 1
}
if (Math.floor(Math.random() * 2) == 1) {
	document.getElementById("butt2").value = document.getElementById("butt2").value * -1
} else {
	document.getElementById("butt2").value = document.getElementById("butt2").value * 1
}
if (Math.floor(Math.random() * 2) == 1) {
	document.getElementById("butt3").value = document.getElementById("butt3").value * -1
} else {
	document.getElementById("butt3").value = document.getElementById("butt3").value * 1
}
if (Math.floor(Math.random() * 2) == 1) {
	document.getElementById("butt4").value = document.getElementById("butt4").value * -1
} else {
	document.getElementById("butt4").value = document.getElementById("butt4").value * 1
}

if (document.getElementById("butt1").value > 0) {
document.getElementById("butt1").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt1").value < 0) {
document.getElementById("butt1").style.backgroundColor = "#2973b8";
} else {
	document.getElementById("butt1").style.backgroundColor = "#7e2691";
}
if (document.getElementById("butt2").value > 0) {
document.getElementById("butt2").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt2").value < 0) {
document.getElementById("butt2").style.backgroundColor = "#2973b8";
} else {
	document.getElementById("butt2").style.backgroundColor = "#7e2691";
}
if (document.getElementById("butt3").value > 0) {
document.getElementById("butt3").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt3").value < 0) {
document.getElementById("butt3").style.backgroundColor = "#2973b8";
} else {
	document.getElementById("butt3").style.backgroundColor = "#7e2691";
}
if (document.getElementById("butt4").value > 0) {
document.getElementById("butt4").style.backgroundColor = "#b53643";
} else if (document.getElementById("butt4").value < 0) {
document.getElementById("butt4").style.backgroundColor = "#2973b8";
} else {
	document.getElementById("butt4").style.backgroundColor = "#7e2691";
}
 }

document.getElementById("nav2").style.visibility = "hidden";
function gameOver() {
	document.getElementById("nav2").style.visibility = "visible";
}

