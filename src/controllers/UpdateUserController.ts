import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

class UpdateUserController{
    async handle(request: Request, response: Response){
        const updateUserService = new UpdateUserService();

        const { id, nome, email, cpf } = request.body

        if(id.length === 0){
            return response.status(400).json({mensagem: 'Id não informado'})
        }

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'Informe um nome'})
        }

        if(email.length === 0){
            return response.status(400).json({mensagem: 'Informe um email valido'})
        }

        if(cpf.length === 0){
            return response.status(400).json({mensagem: 'Informe um cpf'})
        }

        await updateUserService.execute({ id, nome, email, cpf })

        return response.status(204).json()
    }
}

export { UpdateUserController }
