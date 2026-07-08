/**
 * @param {string[]} strs
 * @return {string}
 */

class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let cur = this.root;
        for(let c of word){
            if(!Object.hasOwn(cur.children, c)){
                cur.children[c] = new TrieNode()
            }
            cur = cur.children[c]
        }
        cur.endOfWord=true;
    }
    longestPrefix(){
        let cur = this.root
        let prefix = "";
        while(Object.keys(cur.children).length == 1 && !cur.endOfWord){
            let [key] = Object.keys(cur.children)
            prefix+=key
            cur = cur.children[key]
        }
        return prefix;
    }
}
var longestCommonPrefix = function(strs) {
    let trie = new Trie()
    for(word of strs){
        trie.insert(word)
    }
    return trie.longestPrefix();
};