document.addEventListener("DOMContentLoaded", function(event) {
	var days = document.getElementById("days");
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");

	var daysLabel = document.getElementById("days-label");
	var hoursLabel = document.getElementById("hours-label");
	var minutesLabel = document.getElementById("minutes-label");
	var secondsLabel = document.getElementById("seconds-label");

	var numDays = 0;
	var numHours = 0;
	var numMinutes = 0;
	var numSeconds = 0;

	var applicationDeadline = new Date(2015, 0, 24, 23, 59, 59);

	var daysInMillis = 24 * 60 * 60 * 1000;
	var hoursInMillis = 60 * 60 * 1000;
	var minutesInMillis = 60 * 1000;
	var secondsInMillis = 1000;

	var updateTimer = function () {
		numDays = Math.floor((applicationDeadline - Date.now()) / daysInMillis);
		numHours = Math.floor(((applicationDeadline - Date.now()) / hoursInMillis) % 24);
		numMinutes = Math.floor(((applicationDeadline - Date.now()) / minutesInMillis) % 60);
		numSeconds = Math.floor(((applicationDeadline - Date.now()) / secondsInMillis) % 60);

		console.log(numHours == 1);

		if (numDays == 1) daysLabel.innerHTML = "Day";
		else daysLabel.innerHTML = "Days";
		if (numHours == 1) hoursLabel.innerHTML = "Hour";
		else hoursLabel.innerHTML = "Hours";
		if (numMinutes == 1) minutesLabel.innerHTML = "Minute";
		else minutesLabel.innerHTML = "Minutes";
		if (numSeconds == 1) secondsLabel.innerHTML = "Second";
		else secondsLabel.innerHTML = "Seconds";


		days.innerHTML = numDays;
		hours.innerHTML = numHours;
		minutes.innerHTML = numMinutes;
		seconds.innerHTML =	numSeconds;
	};

	setInterval(function () {
		updateTimer();
	}, 1000);
});