//your JS code here. If required.
function getBrowerinfo(){
	let browerNm=navigator.appName;
	let version=navigator.appVersion;
	let message= "You are using"+" "+browerNm+" "+"version"+version;
	let infoDiv=document.getElementById('browser-info');
	infoDiv.textContent=message;
	
}
window.onload=getBrowerinfo();
