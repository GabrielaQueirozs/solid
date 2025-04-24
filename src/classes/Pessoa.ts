import Endereco from "./Endereco";
// Criar a classe pai (superclasse) chamada pessoa
// que passará todos os seus dados ás classes
// filhas 
/*
A classe pessoa segue o Principio o (open/close)
do SOLID, onde, temos a classe fechada para
modificações e aberta para extensões.
o qualificador abstract(abstrato) mantém a
classe Pessoa, sempre abstrata, não permitindo
que ela seja materializada, ou seja, não poderá
ser uma instância
*/
export default  abstract class Pessoa{
    id!:number;
    nome!:string;
    cpf!:string;
    email!:string;
    telefone?:string;
    endereco!:Endereco;

}