var djs=document.getElementById("djs");
var hours=document.getElementById("hours");
var min=document.getElementById("min");
var secs=document.getElementById("secs");
hours.style.background="pink";
hours.style.width="20px";
hours.style.height="20px";
js(2019,11,15)

			function js(a,b,c){
				var djss="";
				var d=new Date();
				var d1=new Date(2099,11,18);
				var timeC=d1.getTime()-d.getTime();//timeC是d1-d的时间差  毫秒差
				timeC/=1000;//从毫秒换算到秒
				var day=parseInt(timeC/60/60/24);
				var hours=parseInt((timeC-day*24*60*60)/60/60);
				var min=parseInt((timeC-day*24*60*60-hours*60*60)/60);
				var secs=parseInt(timeC-day*24*60*60-hours*60*60-min*60); 
				// djs.innerHTML=`${addZero(hours)}:${addZero(min)}:${addZero(secs)}`;
// 				hours.innerHTML=;
// 				min.innerHTML=;
// 				secs.innerHTML=;
				
				djss+=`
					<li id="hours">${addZero(hours)}</li>${":"}
					<li id="min">${addZero(min)}</li>${":"}
					<li id="secs">${addZero(secs)}</li>
				`
				djs.innerHTML=djss;
			}
			
			function addZero(n){
			    return n<10?"0"+n:n
			}
		// console.log(hours,min,secs)

setInterval(function(){
	js(2019,11,15)
 },1000)