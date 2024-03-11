import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterUserUseCase } from './register-user'
import { InMemoryUserRepository } from '../..//Test/Repository/user-repository-test'

let userRepository: InMemoryUserRepository
let registerUserUseCase: RegisterUserUseCase

describe('Register  User', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    registerUserUseCase = new RegisterUserUseCase(userRepository)
  })

  it('should be able to create a user', async () => {
    const user = await registerUserUseCase.execute({
      name: 'Hugo Uraga',
      email: 'hugouraga61@gmail.com',
      cpf: '404.600.360-09',
      password: 'test@1234',
    })

    expect(user.id).toBeDefined()
    expect(user.email).toBe('hugouraga61@gmail.com')
  })

  it('should do not create a new user', async () => {
    await registerUserUseCase.execute({
      name: 'Hugo Uraga',
      email: 'hugouraga61@gmail.com',
      cpf: '404.600.360-09',
      password: 'test@1234',
    })

    expect(async () => {
      await registerUserUseCase.execute({
        name: 'Hugo Uraga',
        email: 'hugouraga61@gmail.com',
        cpf: '404.600.360-09',
        password: 'test@1234',
      })
    }).rejects.toEqual(Error('User already exist'))
  })
})
