export function addAnimation(x){
		let note = document.querySelector(x);
		note.style.animationName = "slideDown";
		setTimeout(function(){
        	note.style.animationName = null;
        }, 1800);
	}

export function renderTemplate(htmlTemplate, obj) {
	    // Define a regular expression that matches "{{ prop_name }}"
	    var myregex = /\{\{\s*(\w+)\s*\}\}/g;
	    // Replace all occurrences of "{{ prop_name }}" with obj.prop_name
	    var newHtml = htmlTemplate.replace(myregex, function (match, p1) {
	        return obj[p1];
	    });
	    return newHtml;
	}

export const validEmail = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;