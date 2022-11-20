
	export const inputs =  (<HTMLSelectElement>document.getElementsByClassName('input-form')).value;
	
    for (let input of inputs) {
			input.addEventListener("blur", function() {
				if(input.value.trim()!= ""){
					input.classList.add("has-val");
				} else {
					input.classList.remove("has-val");
				}
			});
		}

