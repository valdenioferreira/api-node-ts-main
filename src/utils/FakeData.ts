import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            nome: 'Algum usuario',
            email: 'algumusuario@gmail.com',
            cpf: '12345678901'
        })

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Outro usuario 01',
            email: 'sgtferreirasouza@gmail.com',
            cpf: '12345678901'
        })
    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Algum usuario',
            email: 'algumusuario@gmail.com',
            cpf: '12345678901'
        })

        return user
    }
}

export { FakeData }
