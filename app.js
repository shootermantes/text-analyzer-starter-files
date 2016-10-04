// your code here!

function numLetters(text){  	//counts the number of letters in the total text box
	var numLetters = 0;
	var letters = justWords(text).replace(/\s/g, "");
	for (var i = 0; i < letters.length; i++){
		numLetters++; 
	}
	return numLetters;
}



function wordCount(text){ 		//counts how many words are within the submitted text 
	var words = justWords(text).replace(/\s/g, ',').split(',');
	var count = 0;
	for (var i = 0; i< words.length; i++){
		count++;
	}
	return count;
}

function uniWords(text){ // counts how many unique words there are
	var words = justWords(text).toLowerCase().replace(/\s/g, ',').split(',').sort();
	var count = 0;
	for (var i = 0; i < words.length; i++){
		if (words[i]===words[i+1]){
			if(words[i+1]===words[i+2]){
				continue;
			} else {
				count++;
			}
		}
	}
	return count;
}

function aveWord(text){			//takes 'text' and calculates the average word length
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


function justWords(text){ 		//returns a string of words with spaces between and with no punctuation and special characters
	return text.replace(/[(),^\n]/g, ' ');
}		//  'text' is a string

function renderHtml(value, selector){
	$(selector).text(value);
}



function handleClicks(){  		//event listener
	
	$('.js-text-form').submit(function(event) {
    	event.preventDefault();
    	var userText = $(this).find('#user-text').val();
    	//console.log(numLetters(userText))
    	renderHtml(wordCount(userText), 'dl dd:nth-child(2)');
    	renderHtml(aveWord(userText), 'dl dd:nth-child(6)');
    	renderHtml(aveSent(userText), 'dl dd:nth-child(8)');
    	renderHtml(uniWords(userText), 'dl dd:nth-child(4)')
    	$('.text-report').removeClass('hidden');
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