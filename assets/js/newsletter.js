function newsletterLoad() {
	elementToObserve = document.getElementById('tops_ccform');

	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	observer = new MutationObserver(function(mutationsList, observer) {
		console.log(mutationsList);
		let tops_emailList_label = document.getElementById("list_memberships_label_0");
		let tops_emailList_listsLabel = document.getElementsByClassName("ctct-form-checkbox-label");
		
		if(tops_emailList_label != null) {
			tops_emailList_label_inner = tops_emailList_label.innerHTML;
			tops_emailList_label.innerHTML = "Sign Up!";
		}
		
		if(tops_emailList_listsLabel != null) {
			if(tops_emailList_listsLabel.length > 0) {
				for(i = 0; i < tops_emailList_listsLabel.length; i++) {
					let currentlistlabel = tops_emailList_listsLabel[i];
					console.log('Changing ' + currentlistlabel.innerHTML);
					
					if(i == 0) {
						currentlistlabel.innerHTML = 'Pre-Enroll in Open Science 101';
					} else if(i == 1) {
						currentlistlabel.innerHTML = 'Subscribe to the TOPS Newsletter';
					}
				}
			}
		}
		
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});
}

newsletterLoad();