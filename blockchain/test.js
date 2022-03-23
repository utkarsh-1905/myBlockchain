const Blockchain = require("./blockchain");

const myChain = new Blockchain();

const hash = myChain.hash(1, 1, 100);
// console.log(hash);
