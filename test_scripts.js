 // test script
let corCoin = new Blockchain();
corCoin.addBlock(new Block(1, "10/24/2021", { amount: 4 }));
corCoin.addBlock(new Block(2, "12/24/2021", { amount: 10 }));



      // test script 2#
console.log('Is blockchain valid?' + corCoin.isChainValid());
    
      // test ethical hacking
corCoin.chain[1].data = { amount: 100 };

console.log('Is blockchain valid?' + corCoin.isChainValid());

         //test script 1#
console.log(JSON.stringfy(corCoin, null, 4));

