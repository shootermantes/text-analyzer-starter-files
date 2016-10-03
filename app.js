// your code here!
function numLetters(text){  	//counts the number of letters in the total text box
	var numLetters = 0;
	var letters = text.join().split('');
	for (var i = 0; i < letters.length; i++){
		numLetters++; 
	}
	return numLetters
}

function justWords(text){ 		//returns the list of words with no punctuation and special characters
	return text.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/, ' ').split(' ');
}

function wordCount(text){ 		//counts how many words are within the submitted text 
	var count = 0;
	for (var x in text){
		count++;
	}
	return count;

}


function aveWord(text){			//takes 'text' and calculates the average work length
	var numWords = wordCount(text);
	return numLetters(text)/numWords;
}


function aveSent(text){
	var sent = text.split('\n') //returns an array of strings in sentences
	var numSent = 0;
	for (var i = 0; i < sent.length; i++){
		numSent++;
	}
	return numLetters(text)/numSent;

}







function handleClicks(){  		//event listener
	var x = document.getElementById('user-text').value;
	$('submit').click(function(event){

	})

}





$(document).ready(handleClicks);





















// Ground Control to Major Tom
// Ground Control to Major Tom
// Take your protein pills and put your helmet on
// Ground Control to Major Tom (ten, nine, eight, seven, six)
// Commencing countdown, engines on (fine, four, three)
// Check ignition and may God's love be with you (two, one, liftoff)
// This is Ground Control to Major Tome
// You're really made the grade
// And the papers want to know whose shirts you weat
// Now it's time to leave the capsule if you dare
// "This is Major Tom to Ground Control
// I'm stepping through the door
// And I'm floating in a most peculiar way
// And the stars look very different today
// For here
// Am I sitting in a tin can
// Far above the world
// Planet Earth is blue
// And there's nothing I can do