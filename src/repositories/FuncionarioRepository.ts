import Funcionario from "../classes/funcionario";
import commandsFuncionario from "../Interfaces/commandsFuncionario";
import { conexao } from "../database/Config";


export default class FuncionarioRepository implements commandsFuncionario<Funcionario>{
    pesquisarCargo(cargo: string): Promise<Funcionario>[] {
        throw new Error("Method not implemented.");
    }
    pesquisarSalario(salario: number): Promise<Funcionario>[] {
        throw new Error("Method not implemented.");
    }
    pesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    pesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    cadastrar(obj: Funcionario): PromiseLike<Funcionario> {
        throw new Error("Method not implemented.");
    }

    Listar(): Promise<Funcionario[]> {
        return new Promise((resolve, reject)=>{ 
            conexao.query("Select * from funcionario", (erro, result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (result as Funcionario[]);
                }
            })
        })
    }





    apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    atualizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    pesquisarId(id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    
}