import Cliente from "../classes/Cliente";
import Endereco from "../classes/Endereco";
import { conexao } from "../database/Config";
import commandsPessoa from "../Interfaces/commandsPessoa";

export default class clienteRepository implements commandsPessoa<Cliente>{
    pesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    pesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }

    Listar(): Promise<Cliente[]> {
        return new Promise((resolve, reject)=>{ 
            conexao.query("Select * from cliente", (erro, result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (result as Cliente[]);
                }
            })
        })
    }


    apagar(id: number): string {
        throw new Error("Method not implemented.");
    }
    atualizar(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    pesquisarId(id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }


    cadastrar(obj: Cliente):Promise<Cliente> {

        return new Promise((resolve, reject)=>{
            // Antes de cadastrar um cliente, temos de cadastrar o endereço deste cliente e então obtemos o ID do endereço cadastrado e alocamos em uma variável para depois inserir na tabela clientes, no campo id_endereco
            conexao.query("INSERT INTO endereco(tipo_logradouro,logradouro,numero,complemento,cep,bairro) Values (?,?,?,?,?,?)",
            [obj.endereco.tipo_logradouro,obj.endereco.logradouro,obj.endereco.numero,obj.endereco.complemento,obj.endereco.cep,obj.endereco.bairro],
            (erro,end)=>{
                if (erro) {
                    return reject(erro)
                } else {
                    // id_end = end.insertId
                }
            }
        )
         

            conexao.query("INSERT INTO cliente SET?",obj,(erro,result)=>{
                if(erro){ 
                    return reject (erro);
                } else {
                return resolve (obj);
                }
         })
        
        })
    }
}
