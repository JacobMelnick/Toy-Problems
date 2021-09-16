paths = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
];

const findDuplicates = (paths) => {
  let map = new Map();

  for (let i = 0; i < paths.length; i++) {
    const curr = paths[i].split(" ");
    let root = curr[0];
    for (let j = 1; j < curr.length; j++) {
      const file = curr[j];
      let split = file.split(".")[1];
      if (!map.has(split)) {
        map.set(split, []);
    }
        map.get(split).push(root + "/" + file.split("(")[0]);
    }
  }

  return [...map.values()].filter(num => num.length > 1);
};

console.log(findDuplicates(paths));


var findDuplicate = function(paths) {
    let group = {};
    for (let i=0;i<paths.length;i++) {
        let path = paths[i].split(" "); // split by space so we can use the information easily
        for (let j=1;j<path.length;j++) {
            let temp = path[j].split('('); // split again and temp will always be [`the file name`, `the file content`]
            if (group[temp[1]] == null) group[temp[1]] = [];
            group[temp[1]].push(path[0] + '/' + temp[0]); // push the complete file path
        }
    }
    return [...Object.values(group)].filter((val)=>val.length>1)