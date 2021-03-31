function maxValue(node, visited=new Set()) {
    let queue = [node];
    let vals = [];

    while (queue.length) {
        let currPos = queue.shift();

        if (vals.includes(currPos.val)) continue;   // checking to make sure value is not already in array, give us value of the current node
        else vals.push(currPos.val);                // push just the value into vals array

        if (currPos.neighbors.length) {         // checking to see if current node has neighbors
            queue.push(...currPos.neighbors)    // push whole neighbors node into queue array
        }

    }
    return Math.max(...vals)                    // given set of number, gives max number (highest)
}

module.exports = {
    maxValue
};
