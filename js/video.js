var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// speed up button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// skip ahead button
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Going back to the start");
	} else {
		video.currentTime += 10;
		console.log("New time is " + video.currentTime);
	}
});

// mute button
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Change Volume");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// old school button
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

// original button
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});