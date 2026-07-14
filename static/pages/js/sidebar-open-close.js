function openSidebar() {
	console.log("open-sidebar pressed!")
	document.getElementById("sidebar").style.width = "330px";
	document.getElementById("dark-background").style.width = "100%";
}
function closeSidebar() {
	console.log("closeNav pressed!")
	document.getElementById("sidebar").style.width = "0px";
	document.getElementById("dark-background").style.width = "0px";
//	const element = document.getElementById('closebtn');
//	const width = element.clientWidth;
//	console.log(width)
}
