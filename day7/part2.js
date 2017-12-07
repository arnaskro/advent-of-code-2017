const calculateWeights = (tree) => {
  
  for (let key in tree)
    if (tree[key].totalWeight === undefined)
      tree[key].totalWeight = findTotalWeight(tree, tree[key])

  return tree;
}

const findTotalWeight = (tree, node) => {
  let weight = node.weight;

  for (var i = 0; i < node.children.length; i++){
    if (tree[node.children[i]].totalWeight === undefined)
      tree[node.children[i]].totalWeight = findTotalWeight(tree, tree[node.children[i]])

    weight += tree[node.children[i]].totalWeight
  }

  return weight;
}

const evaluateChildren = (tree, node) => {

  let curr = node;
  let unbalanced = null;

  while (curr !== null) {
    unbalanced = curr;
    curr = findUnbalanced(tree, curr)
  } 

  return unbalanced
}

const findUnbalanced = (tree, node) => {
  console.log(node)
  if (node.children.length == 0) return null;
  let value = tree[node.children[0]].totalWeight;

  for (var i = 0; i < node.children.length; i++)
    if (value != tree[node.children[i]].totalWeight) return tree[node.children[i]];

  return null
}

const nicePrint = (tree,node) => {
  let ttl = node.weight;
  let str = node.weight + " + (";

  for (var i = 0; i < node.children.length; i++) {
    str += tree[node.children[i]].totalWeight;
    ttl += tree[node.children[i]].totalWeight;

    if (i !== node.children.length - 1)
      str  += " + "
  }

  return str + ") = " + ttl;
}

const part2 = () => {
  let tree = createTree(parseData());
  let root = findRoot(tree);
  tree = calculateWeights(tree);

  let unbalanced = evaluateChildren(tree,root);
  let unbalancedParent = unbalanced.parent;

  console.log(nicePrint(tree, unbalancedParent)) // 3248 + (1786 + 1792 + 1786 + 1786 + 1786 + 1786) = 13970
  console.log(nicePrint(tree, unbalanced)) // 808 + (164 + 164 + 164 + 164 + 164 + 164) = 1792

  let sibling = unbalancedParent.children[0] == unbalanced ? unbalancedParent.children[1] : unbalancedParent.children[0];

  return unbalanced.weight - (unbalanced.totalWeight - tree[sibling].totalWeight)
};


console.log("Part 2 answer:", part2()); // 802