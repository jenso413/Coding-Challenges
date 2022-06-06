// My solution

function arrayDiff(a, b) {

    // If result is truthy, number gets kept
    // We want to keep the numbers that are not in b
    return a.filter(num => !b.includes(num))
}

// Also the best solution, however I had to look at the answers for this one

// What I learned:

// Learn array methods better
// The 'includes' method: 
// Array.includes returns true if an array contains a certain value, and false otherwise
// Very useful!