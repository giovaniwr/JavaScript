import {Cliente} from "./Cliente.js"    
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente('Ricardo', 11122233388); 
const cliente2 = new Cliente('Alice', 88822233388);

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const ContaCorrenteAlice = new ContaCorrente(1002, cliente2);
 
ContaCorrenteRicardo.depositar(1000);

ContaCorrenteRicardo.transferencia(500, ContaCorrenteAlice);
console.log(ContaCorrente.numeroDeContas);

ContaCorrenteRicardo.depositar(500);
console.log(ContaCorrenteRicardo);