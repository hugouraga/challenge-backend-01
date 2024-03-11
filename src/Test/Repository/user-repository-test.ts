import {
  UserRepository,
  findByParamsInterface,
} from '../../Application/Repository/user-repository'
import { User } from '../../Domain/Entity/User'

export class InMemoryUserRepository implements UserRepository {
  readonly users: User[] = []

  async create(user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)
    return user ?? null
  }

  async findByParams({
    email,
    cpf,
  }: findByParamsInterface): Promise<User | null> {
    const user = this.users.find(
      (user) => user.cpf.value === cpf || user.email.value === email,
    )
    return user ?? null
  }
}
