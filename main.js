const { SHA256 } = require("crypto-js");

class Block{
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();


  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain{
  constructor(){
    this.chain = [this.createGensisBlock()];
  }

  createGensisBlock(){
    return new Block(0, "10/23/2021","Gensis block", "0");
  }

  getlastestBlock(){
    return this.chain[this.chain.length -1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getlastestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
      for(let i = 1; i < this.chain.length; i++){
          const currentBlock = this.chain[i];
          const previousBlock = this.chain[i-1];

          if(currentBlock.hash !== currentBlock.calculateHash()){
               renturn false;
          }
          if(currentBlock.previousHash !== previousBlock.hash){
              return false;
         } 
      }
   
    return true;
   }
}
