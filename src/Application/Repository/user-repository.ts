import { User } from '@/Domain/Entity/User'

export interface findByParamsInterface {
  email: string
  cpf: string
}

export interface UserRepository {
  create(user: User): Promise<User>
  findById(id: string): Promise<User | null>
  findByParams(params: findByParamsInterface): Promise<User | null>
}
