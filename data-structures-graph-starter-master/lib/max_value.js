function maxValue(node, visited=new Set()) {
    let queue = [node];
    let vals = [];

    while (queue.length) {
        let currPos = queue.shift();

        if (vals.includes(currPos.val)) continue;
        else vals.push(currPos.val);

        if (currPos.neighbors.length) {
            queue.push(...currPos.neighbors)
        }

    }
    return Math.max(...vals)
}

module.exports = {
    maxValue
};
