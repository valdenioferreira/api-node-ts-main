import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController{
    async handle(request: Request, response: Response) {

        const createUserService = new CreateUserService();
        
        const nome = request.body.nome;
        const email = request.body.email;
        const cpf = request.body.cpf;
        const id = uuid();

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'Nome obrigatório'})
        }

        if(cpf.length === 0 && cpf.length <= 11){
            return response.status(400).json({mensagem: 'CPF inválido'})
        }

        const user = await createUserService.execute({id, nome, email, cpf})

        return response.status(201).json(user)
    }
}

export { CreateUserController }
