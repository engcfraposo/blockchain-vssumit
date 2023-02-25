const { v4 : uuid } = require("uuid");
const sha256 =require("crypto-js/sha256");

module.exports = class Block {
    constructor(index = 0, previousHash = null, data = "Genesis Block", difficulty = 2){
        this.index = index; //posição do bloco
        this.previousHash = previousHash; // hash anterior
        this.data = data // Dado a ser salvo;

        this.transactionId = uuid(); //id para identificar a transação
        this.timestamp = new Date(); // horario da transação
        this.nonce = 0 // Quantidade de hash para achar o prefixo

        const prefix = new Array(difficulty + 1).join("0");
        this.mine(prefix);
    }

    //Mineração de Hash
    mine(prefix) {
        do {
            this.nonce++;
            this.hash = this.generateHash();
        }
        while (!this.hash.startsWith(prefix));
    }

    generateHash() {
        return sha256(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce + this.transactionId).toString();
    }
}