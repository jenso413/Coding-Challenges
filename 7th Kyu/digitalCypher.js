// My solution

function encode(str,  n) {
  
    const numArray = []

    const strArray = [...str]

    // Get number value for letters (ascii value - 96)
    for (let i = 0; i < strArray.length; i++) {
        const numValue = strArray[i].charCodeAt(0) - 96
        numArray.push(numValue)
    }

    // Now we have our decoded array from the word
    console.log(numArray)

    // Key array
    const keyNumArray = n.toString().split('').map(el => parseInt(el))
    console.log(keyNumArray)

    const result = []
    let counter = 0

    for (let i = 0; i < numArray.length; i++) {
        if (counter === keyNumArray.length) {
            counter = 0
        }
        
        result.push( numArray[i] + keyNumArray[counter])
        counter++ 
    }

    console.log(result)
}

// Better Solution

function encode(str, n) {
    const key = String(n)
    return Array.from(str, (c, i) => (c.charCodeAt(0) - 96) + Number(key[i % key.length]) )
}

// What I learned

// I learned that you can call a map function from within Array.from
// I learned that charCodeAt allows you to access ASCII character codes based on the index of a string
// I learned how to loop continuously over an array using modulus
