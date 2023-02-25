const Blockchain = require ('./src/blockchain')


// Criar uma nova Blockchain
const blockchain = new Blockchain()

//console.log(blockchain)



// Adicionar um novo Bloco
blockchain.newBlock("aqui um novo bloco")

//console.log(blockchain)


// Adicionar um novo Bloco
blockchain.newBlock("outro bloco")
//console.log(blockchain.isValid())

// editar a block chain
blockchain.chain[1].data = "injetei um novo dado"

//console.log(blockchain)
console.log(blockchain.isValid())


