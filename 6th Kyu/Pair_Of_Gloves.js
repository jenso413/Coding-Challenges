// My solution
function numberOfPairs(gloves) {
    
    const array = []
    let count = 0

    for (let glove of gloves) {
        if (array.includes(glove)) {
            const index = array.indexOf(glove)
            array.splice(index, 1)
            count++
        } else {
            array.push(glove)
        }
    }
    
    return count
}

// Better Solution

// A lot of ways of doing this one, I think my way is very readable and efficient!