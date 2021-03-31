function numRegions(graph) {
    let count = 0;

    for (let node in graph) {
        if (graph[node]) {
            count++;
        }
        console.log()
    }
    console.log(`this is the count ${count}`);
    return count;
}

function BFStraversal(node) {
    let queue = [node];
    let vals = [];

    while (queue.length) {
        let currPos = queue.shift();

        if (vals.includes(currPos.val)) continue;
        else vals.push(currPos.val);

        if (currPos.neighbors.length) {
            queue.push(...currPos.neighbors)
            return true;
        }

    }
}

module.exports = {
    numRegions
};
