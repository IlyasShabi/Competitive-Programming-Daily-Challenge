// One Away -- Cracking the Coding Interview
export function main(original, edited) {
	const original_length = original.length;
	const edited_length = edited.length;
	if(original_length == edited_length){
		return isEdited(original, edited);
	}else if(original_length > edited_length){
		return isDeleted(original, edited);
	}else{
		return isDeleted(edited, original);
	}
}

function isDeleted (original, edited) {
	let numberOfRemplacement = 0;
	let i = 0;
	let j = 0;
	while(i != original.length-1 && numberOfRemplacement < 2){
		if(original[i] ===  edited[j]){
			i++;
			j++;
		}else {
			numberOfRemplacement++;
			i++;
		}
	}
	return numberOfRemplacement === 1;
}

function isEdited (original, edited) {
	let numberOfRemplacement = 0;
	for(let i = 0; i<original.length; i++){
		if(original[i] !== edited[i])	numberOfRemplacement++;
		if(numberOfRemplacement >1 ) break;
	}
	return numberOfRemplacement === 1;
}