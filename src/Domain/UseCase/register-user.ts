import { UserRepository } from '@/Application/Repository/user-repository'
import { User } from '../Entity/User'

export interface RegisterUserUseCaseRequest {
  name: string
  email: string
  cpf: string
  password: string
}
export interface RegisterUserUseCaseResponse {
  id: string
  name: string
  email: string
  cpf: string
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    email,
    cpf,
    password,
  }: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseResponse> {
    const checkUser = await this.userRepository.findByParams({ cpf, email })
    if (checkUser) throw new Error('User already exist')

    const newUser = User.create({
      name,
      email,
      cpf,
      password,
    })

    await this.userRepository.create(newUser)

    return {
      id: newUser.id,
      name: newUser.name.value,
      email: newUser.email.value,
      cpf: newUser.cpf.value,
    }
  }
}
