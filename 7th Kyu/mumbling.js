// My solution

function accum(s) {
	
    const strArray = [...s.toLowerCase()]
    const res = strArray.map((letter, index) => {
        const str = letter.repeat(index + 1)
        const upperStr = str.charAt(0).toUpperCase() + str.slice(1)
        return upperStr
    })
    
    return res.join('-')
}   

// Better Solution

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

// What I learned

// How to use index parameter of map function