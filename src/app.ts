import express from "express";
import cors from "cors";
import ClienteService from "./services/clienteServices";

const app = express();
app.use(express.json());
app.use(cors())

const cli = new ClienteService();

app.get("/api/v1/cliente/listar", (req,res)=>{
    cli.listarClientes(req,res);
});

app.get("/api/v1/autor/listar", (req,res)=>{
    cli.listarAutor(req,res);
});
app.get("/api/v1/funcionario/listar", (req,res)=>{
    cli.listarFuncionario(req,res);
});

app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
});