// My solution
function dirReduc(arr){

    const oppositeDirections = {
        "NORTH" : "SOUTH",
        "SOUTH" : "NORTH",
        "EAST" : "WEST",
        "WEST" : "EAST"
    }

    let changed = false

    for (let i=0; i < arr.length; i++) {
        if (arr[i + 1] == oppositeDirections[arr[i]]) {
            arr.splice(i, 2)
            changed = true
        }
    }

    return changed ? dirReduc(arr) : arr

}
// Note: I really like this solution, but I couldn't figure out how to recurse until looking at the answers

// Better solution
function dirReduc(plan) {

    var opposite = {
      'NORTH': 'SOUTH',
      'EAST': 'WEST',
      'SOUTH': 'NORTH',
      'WEST': 'EAST'
    };

    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
}

// What I learned

// Quite a bit from this one
// Reduce is a better solution here, because it only has to run once
// Learned that you need a condition to stop recursion, no matter what