import { MerchantRepository } from '@/Application/Repository/merchant-repositoty'
import { Merchant } from '../Entity/Merchant'

export interface RegisterMerchantUseCaseRequest {
  fantasyName: string
  cnpj: string
  password: string
}
export interface RegisterMerchantUseCaseResponse {
  id: string
  fantasyName: string
  cnpj: string
}

export class RegisterMerchantUseCase {
  constructor(private merchantRepository: MerchantRepository) {}

  async execute({
    fantasyName,
    cnpj,
    password,
  }: RegisterMerchantUseCaseRequest): Promise<RegisterMerchantUseCaseResponse> {
    const checkMerchant = await this.merchantRepository.findByParams({ cnpj })
    if (checkMerchant) throw new Error('Merchant already exist')

    const newMerchant = Merchant.create({
      fantasyName,
      cnpj,
      password,
    })

    await this.merchantRepository.create(newMerchant)

    return {
      id: newMerchant.id,
      fantasyName: newMerchant.fantasyName,
      cnpj: newMerchant.cnpj.value,
    }
  }
}
