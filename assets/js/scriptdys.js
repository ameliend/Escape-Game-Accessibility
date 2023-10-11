function scrambleText(text) {
    var words = text.split(' ');
    var scrambledWords = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 3) {
            var firstChar = word.charAt(0);
            var lastChar = word.charAt(word.length - 1);
            var middleChars = word.substring(1, word.length - 1).split('');

            // Shuffle the middle characters
            for (var j = middleChars.length - 1; j > 0; j--) {
                var randomIndex = Math.floor(Math.random() * (j + 1));
                var temp = middleChars[j];
                middleChars[j] = middleChars[randomIndex];
                middleChars[randomIndex] = temp;
            }

            // Reassemble the word
            word = firstChar + middleChars.join('') + lastChar;
        }

        scrambledWords.push(word);
    }

    return scrambledWords.join(' ');
}

function updateText() {
    var originalText = "Ce premier billet je le donne à Soraya. Ce deuxième billet, je le donne à Alexandra. Ce troisième billet, je le donne à Iris. Ce quatrième billet, je le donne à Sarah. Ce cinquième billet, je le donne à Orchidée. Ce sixième billet, je le donne à Nadia. Ce septième billet, je le donne à Ursulla. Ce huitième billet, je le donne à Nina";
    var scrambledText = scrambleText(originalText);
    document.getElementById('dyslexia-text').textContent = scrambledText;
}

// Update the text initially and then at regular intervals
updateText();
setInterval(updateText, 350); // Change every 2 seconds
