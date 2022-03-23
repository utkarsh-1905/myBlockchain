const sha256 = require("sha256");

function Blockchain() {
  this.chain = [];
  this.pending_transactions = [];
  this.new_transactions = [];

  Blockchain.prototype.createBlock = function (nonce, previous_hash, hash) {
    const block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.new_transactions,
      hash: hash,
      nonce: nonce,
      previousBlockHash: previous_hash,
    };
    this.new_transactions = [];
    this.chain.push(block);
    return block;
  };

  Blockchain.prototype.hash = function (
    pending_transactions,
    previous_hash,
    nonce
  ) {
    const data =
      nonce.toString() + previous_hash + JSON.stringify(pending_transactions);
    const hash = sha256(data);
    return hash;
  };
}

module.exports = Blockchain;
