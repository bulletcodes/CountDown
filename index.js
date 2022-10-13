var date = prompt("Write a date you want to countdown to '(eg: YYYY-MM-DD)'");
var even = prompt("Write the event");

const countdown = () => {
	
	const countDate = new Date(date).getTime();
	const now = new Date().getTime();
	const gap = countDate - now;
	
	//How those it work
	const second = 1000;
	const minute  = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	
	//calculation
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);
	
	document.querySelector(".day").innerText = textDay;
	document.querySelector(".hour").innerText = textHour;
	document.querySelector(".minute").innerText = textMinute;
	document.querySelector(".second").innerText = textSecond;
	
};	
countdown();
  setInterval(countdown , 1000);
  
var i = 0;
function change() {
	document.querySelector(".event").innerHTML = even;
  var doc = document.querySelector(".event");
  var color = ["Yellow", "blue", "purple", "green"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);
changeColor();
