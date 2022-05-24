// My answer

const reverseSeq = n => {
    
    const res = []
    
    while (n > 0) {
        res.push(n)
        n--
    }

    return res
};

// Better answer

const betterAnswer = n => {
    let res = []

    for (let i=n; i > 0; i--) {
        res.push(i)
    }

    return res
}

// What I learned

// Very smart to use C-style for loop and declare i as the value of n
// Better than my while method, IMO