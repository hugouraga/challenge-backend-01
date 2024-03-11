import { User } from '@/Domain/Entity/User'

export interface UserRespository {
  create(user: User): Promise<User>
  findById(id: string): Promise<User | null>
}
