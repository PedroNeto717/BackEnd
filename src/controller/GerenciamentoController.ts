import { Request, response, Response } from "express";
import PcSchema from "../models/PcSchema";

async function procurarpordono(dono: string) {
    const nomeDono = await PcSchema.find({ dono });
    return nomeDono;
  } 

class GerenciamentoController {
 
//CADASTROS

   async cadastrar(request: Request, response: Response) {
        try{
            const nomeDono = request.body.dono;
            const donoEncontrado = await procurarpordono(nomeDono);
            if(donoEncontrado.length){

                response.status(400).json({ message: "Dono já existente"});

            }

            const novoCadastro = await PcSchema.create(request.body);
            response.status(201).json(novoCadastro);
        }
        catch(error)
        {
            response.status(400).json({
                objeto: error,
                msg: "Erro ao realizar o cadastro",
                erro: true,
            });
        }
    }


//LISTAGEM

    async listar(request: Request, reponse: Response) 
    {
        const classe = await PcSchema.find();
        reponse.status(200).json(classe);
    }

    
//DELETAR

    async remover (request: Request, response: Response) 
    {
        try {
            const {id} = request.params;
            const remover =  await PcSchema.findByIdAndRemove({ _id: id});
            
            response.status(201).json({
                objeto: remover,
                msg: "computador deletado!",
                erro: false,
            });
        } 
        catch (error) 
        {
            response.status(400).json({
                objeto: error,
                msg: "Erro ao deletar",
                erro: true,
            });
        }
    }

}

export { GerenciamentoController };