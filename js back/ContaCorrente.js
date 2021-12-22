import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0; 
    agencia;
    _cliente;

    _saldo = 0;


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }// set é para referenciar e substituir 
    }
    get cliente(){
        return this._cliente;
    }//get é para consultar 


    constructor(agencia,cliente){
        this.agencia = agencia;
        this._cliente = cliente; // uso o cliente que tem dentro da classe no get
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
        this._saldo -= valor;
        return valor;
        }
    }
    depositar(valor){ 
        if(valor <= 0){
             return;
        }
        this._saldo += valor;
    }
    transferencia(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
