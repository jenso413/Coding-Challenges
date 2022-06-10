// My solution
function findMissingLetter(array) {

    let initial = array[0].charCodeAt(0)
    const array2 = array.slice(1)
    
    for (letter of array2) {
        if (letter.charCodeAt(0) == initial + 1) {
            initial += 1
        } else {
            // Want to return the letter before this letter
            return String.fromCharCode(letter.charCodeAt(0) - 1)
        }
    }
}

// Better solution
function findMissingLetter(array) {
   
    var i=array[0].charCodeAt();

   array.map(x=>  x.charCodeAt()==i?i++:i);

   return String.fromCharCode(i);
}

// This solution is more succinct, makes use of the map method

// What I learned

// To trust my gut, I thought there would be a much better way of solving this, but my way was just fine