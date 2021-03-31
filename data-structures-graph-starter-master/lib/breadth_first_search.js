function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let vals = [];

    while (queue.length) {
        let currPos = queue.shift();

        if (vals.includes(currPos)) continue;
        else vals.push(currPos);

        if (currPos.val === targetVal) return currPos;
        else queue.push(...currPos.neighbors)
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};
