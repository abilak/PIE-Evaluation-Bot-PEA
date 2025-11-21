document.getElementById('NextButton').click();

setInterval(() => {

    if(document.getElementById('NextButton').title == 'Submit') { 
        document.getElementById('NextButton').click(); 
    }

    else { 
        lister = document.getElementsByClassName('q-radio');
        if(lister.length > 0) { 
            for(let ele of lister) {
                ele.click();
            }
        }

        document.getElementById('NextButton').click(); 
    }

}, 1000);
