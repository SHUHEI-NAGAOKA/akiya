// main_script.js

document.getElementById('tab1').style.display = 'block';

function openTab(tabName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName('tab');
	for(i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = 'none';
	}


	document.getElementById(tabName).style.display = 'block';
}