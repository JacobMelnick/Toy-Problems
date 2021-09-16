class Trie {
  constructor() {
    this.root = {};
  }

  insert = (word) => {
    let node = this.root;
    for (let letter of word) {
      if (node[letter] == null) {
        node[letter] = {};
    }
    node = node[letter];
    }
    node.isWord = true;
  };

  traverse = (word) => {
    let node = this.root;
    for (let letter of word) {
      node = node[letter];
      if (node == null) {
        return null;
      }
    }
    return node;
  };

  search = (word) => {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  };

  startsWith = (prefix) => {
    return this.traverse(prefix) != null
  };
}
const trie = new Trie();
trie.insert("banana");
trie.insert("apple");
trie.search("apple"); // return True
trie.search("app"); // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");
// console.log(trie.insert('app'))
console.log(trie.root);
console.log(trie.search('app'));
