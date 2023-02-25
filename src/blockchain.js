const Block = require('./block')

module.exports = class Blockchain {
    constructor(){
        this.chain = [ new Block() ]
        this.nextIndex = 1;
    }

    //Adiciona um novo bloco a rede
    newBlock(data){
        const previousHash = this.getPreviousHash()
        const block = new Block(this.nextIndex, previousHash, data)
        this.nextIndex++
        this.chain.push(block)
    }

    //pega a informação do hash do ultimo bloco
    getPreviousHash(){
        return this.chain[this.chain.length - 1].hash
    }

    //valida os dados da blockchain
    isValid(){
        for(let i = this.chain.length -1; i>0; i--){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.generateHash()){
                console.log(currentBlock)
                return false;
            }
            if(currentBlock.index === previousBlock.nextIndex){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}