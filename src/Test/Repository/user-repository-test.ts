import { UserRespository } from '../../Application/Repository/user-repository'
import { User } from '../../Domain/Entity/User'

export class InMemoryUserRepository implements UserRespository {
  private users: User[] = []

  async create(user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)
    return user ?? null
  }
}
