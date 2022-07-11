const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function getAnswer() {
	let input = document.getElementById('input').value;
	input = input.replace(/[^a-zA-Z ]/g, "");
	let words = input.split(" ");
	let theLongestWord = "";
	let length = 0;
	let vowels = 0;
	for (let i = 0 ; i < words.length ; i++) {
		let str = words[i];
		if (str.length > length) {
			theLongestWord = str;
			length = str.length;
			vowels = countVowels(str);
		} else if (str.length == length) {
			if (vowels < countVowels(str)) {
				theLongestWord = str;
				vowels = countVowels(str);
			}
		}
	}
	document.getElementById('output').value = theLongestWord;
}

function countVowels(word) {
  let counts = 0;
  for(let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      counts++;
    }
  }
  return counts;
}