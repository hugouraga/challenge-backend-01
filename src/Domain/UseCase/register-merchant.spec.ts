import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterMerchantUseCase } from './register-merchant'
import { InMemoryMerchantRepository } from '../../Test/Repository/merchant-repository-test'

let merchantRepository: InMemoryMerchantRepository
let registerMerchantUseCase: RegisterMerchantUseCase

describe('Register  Merchant', () => {
  beforeEach(() => {
    merchantRepository = new InMemoryMerchantRepository()
    registerMerchantUseCase = new RegisterMerchantUseCase(merchantRepository)
  })

  it('should be able to create a merchant', async () => {
    const merchant = await registerMerchantUseCase.execute({
      fantasyName: 'Hugo_Uraga',
      cnpj: '58.171.147/0001-24',
      password: 'test@1234',
    })

    expect(merchant.id).toBeDefined()
  })

  it('should do not create a new merchant', async () => {
    await registerMerchantUseCase.execute({
      fantasyName: 'Hugo_Uraga',
      cnpj: '58.171.147/0001-24',
      password: 'test@1234',
    })

    expect(async () => {
      await registerMerchantUseCase.execute({
        fantasyName: 'Hugo_Uraga',
        cnpj: '58.171.147/0001-24',
        password: 'test@1234',
      })
    }).rejects.toEqual(Error('Merchant already exist'))
  })
})
