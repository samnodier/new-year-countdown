document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loading").style.visibility = "visible";
	} else {
		document.querySelector("#loading").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
		document.querySelector("#countdown").style.display = 'grid';
	}
}

// Grab some DOM Elements
const spinner = document.querySelector('#loading');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const year = document.querySelector('#year');

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const newYearTime = new Date(`January 01 ${ nextYear } 00:00:00`);

year.innerText = currentYear;
document.querySelector("#nextYear").innerText = nextYear;

// Update the countdown time
function countdown() {
	const currentTime = new Date();
	
	const difference = newYearTime - currentTime;
	
	// Calculate days, hours, minutes, and seconds from difference
	const d = Math.floor(difference / 1000 / 60 / 60 / 24);
	const h = Math.floor(difference / 1000 / 60 / 60) % 24;
	const m = Math.floor(difference / 1000 / 60) % 60;
	const s = Math.floor(difference / 1000) % 60;
	
	// Update the DOM with the values
	days.innerHTML = d;
	hours.innerHTML = h > 9 ? h : `0${h}`;
	minutes.innerHTML = m > 9 ? m : `0${m}`;
	seconds.innerHTML = s > 9 ? s : `0${s}`;
}

// Show the spinner before the DOM is fully loaded
/*setTimeout(() => {
	spinner.remove();
	document.querySelector("#countdown").style.display = 'grid';
}, 1000);
*/
setInterval(countdown, 1000);
