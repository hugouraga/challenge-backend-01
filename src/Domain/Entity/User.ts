import { randomUUID } from 'crypto'
import { Name } from './Value-object/Name'
import { Password } from './Value-object/Password'
import { CPF } from './Value-object/CPF'

export interface UserProps {
  id: string
  name: string
  cpf: string
  password: string
}

export class User {
  readonly id
  readonly name
  readonly cpf
  private password

  constructor(id: string, name: Name, cpf: CPF, password: Password) {
    this.id = id
    this.name = name
    this.cpf = cpf
    this.password = password
  }

  static create({ name, cpf, password }: Omit<UserProps, 'id'>) {
    const id = randomUUID()
    const newUser = new User(
      id,
      new Name(name),
      new CPF(cpf),
      new Password(password),
    )
    return newUser
  }

  getPassword() {
    return this.password
  }
}
