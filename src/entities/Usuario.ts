import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('usuarios')
class Usuario {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    cpf: string
}

export { Usuario }
