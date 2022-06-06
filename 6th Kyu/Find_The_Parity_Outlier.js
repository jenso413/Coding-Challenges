// My solution
function findOutlier(integers){

    let odd = 0
    let even = 0
    let res

    for (let num of integers) {
        if (num % 2 === 0) {
            even++
        } else {
            odd++
        }
    }

    if (even === 1) {
        res = integers.filter(num => num % 2 === 0)
    } else {
        res = integers.filter(num => num % 2 !== 0)
    }

    return res[0]
}

// Better solution

// Filter the even and odd numbers, find the one that has a length of 1
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}

// What I learned

// A different way of thinking! The better solution is much more clever and compact