import {Request, Response} from "express";
import Autor from "../classes/Autor";
import AutorRepository from "../repositories/AutorRepository";

export default class AutorService{
    AURepository = new AutorRepository();


async listarAutor(req:Request, res:Response){
    try{
        const rs = await this.AURepository.Listar()
        return res.status(201).json(rs);
    }
    catch(erro){
        return res.status(500).json(erro)
      }
}
}