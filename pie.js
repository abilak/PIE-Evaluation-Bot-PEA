let classes = document.getElementsByClassName('list-group-item-heading breakall');

for(let j = 0; j < classess.length; j++) {
	classes[j].click();
	eles = document.getElementsByClassName('inputGroupVertical');

	for(let i = 0; i < eles.length; i++) {
		eles[i].children[0].children[0].click();
	}
	
	let button = document.getElementById('surveysubmit');
	button.click();
	
	let second_button = document.getElementsByClassName('btn btn-primary btn-lg btn-spinner')[2]
	second_button.click();
}


