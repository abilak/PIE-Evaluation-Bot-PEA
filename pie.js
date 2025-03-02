classes = document.getElementsbyClassName('list-group-item-heading breakall');
for(let j = 0; j < classes.length; j++) {
	classes[j].click() // edit later
	eles = document.getElementsByClassName('inputGroupVertical');
	for(let i = 0; i < eles.length; i++) {
		eles[i].children[0].children[0].click();
	}
	
	let button = document.getElementById('surveysubmit');
	button.click();
	
	let second_button = document.getElementsByClassName('btn btn-primary btn-lg btn-spinner')[2]
	second_button.click();
}




