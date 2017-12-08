const parseData = () => 
  document.body.innerHTML
  .trim()
  .split(/\n\r?/g)
  .filter(x => x.length > 0 && x.indexOf('<') === -1)
  .map(x => x.trim().replace("&gt;", ">"))
  .map(line => 
    (([, name, weight, x, children]) => ({parent: null, name, weight: +(weight.match(/\d+/)[0]), children: children === undefined ? [] : children.split(', ')}))
    (line.match(/([a-z]+) (\(\d+\))(?: (-> ([a-z, ]+)))?/))
  );


// 1st approach
const createTree = (input) => {
  let tree = {};
  
    // Create tree nodes
    for (let i = 0; i < input.length; i++)
      tree[input[i].name] = input[i]
  
    for (let key in tree)
      for (let i = 0; i < tree[key].children.length; i++)
        tree[tree[key].children[i]].parent = tree[key];
  
  return tree;
}

const findRoot = (tree) => {
  let root = tree[Object.keys(tree)[0]];

  while (true)
    if (root.parent == null) break;
    else root = root.parent;

  return root;
}

const part1older = (input) => {
  let tree = createTree(input);
  let root = findRoot(tree);

  return root.name;
};


// 2nd approach
const part1 = (input) => {
  let root, parent = input[0];

  do {
    root = parent;
    parent = input.filter(z => z.children.indexOf(root.name) != -1)[0]
  } while(parent !== undefined)

  return root.name;
}

console.log("Part 1 answer:", part1(parseData())); // ahnofa