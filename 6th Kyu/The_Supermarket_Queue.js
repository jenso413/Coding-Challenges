// My solution
function queueTime(customers, n) {
    const cashiers = [...Array(n)].map(num => 0)
    
    for (let customer of customers) {
        const chosenCashier = cashiers.indexOf(Math.min(...cashiers))
        cashiers[chosenCashier] += customer
    }

    return Math.max(...cashiers)
}

// Better solution:

// My solution was the top solution!

// What I learned:

// First of all, I am insanely proud of myself! I got this first try!
// And it's just like the #1 answer!!
// But I learned about how the rest operator differs from the spread operator
// I also learned you can construct arrays of length n by doing Array(n)
// Finally, I learned there is a fill method for arrays that makes all their values that value