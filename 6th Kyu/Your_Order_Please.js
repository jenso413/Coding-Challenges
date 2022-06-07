// My solution
function order(words){

    if (words.length < 1) {
        return ''
    }

    const wordsArray = words.split(' ')
    const result = Array(wordsArray.length).fill(0)

    for (let word of wordsArray) {
        const wordElements = word.split('')
        
        for (let element of wordElements) {
            if (!isNaN(element)) {
                result[element - 1] = word
            }
        }
    }

    return result.join(' ')
}

// Better solution
function order(words){
  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

// What I learned

// I like my solution, but using a regex is probably smarter
// Learned that \d matches any single digit (0-9)