// My solution
function duplicateEncode(word){
    
    const wordArr = word.toLowerCase().split('')

    const hashMap = {}

    for (let letter of wordArr) {
        if (hashMap[letter]) {
            hashMap[letter]++
        } else {
            hashMap[letter] = 1
        }
    }

    const res = wordArr.map((letter) => hashMap[letter] == 1 ? '(' : ')')

    return res.join('')
}

// Better solution
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}

// What I learned

// Didn't know that lastIndexOf existed, very helpful
// Learned that Array.map can take a third argument, the array that map was called on (allowed this solution to chain)