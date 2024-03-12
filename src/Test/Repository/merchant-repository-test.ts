import {
  MerchantRepository,
  findByParamsInterface,
} from '../../Application/Repository/merchant-repositoty'
import { Merchant } from '../../Domain/Entity/Merchant'

export class InMemoryMerchantRepository implements MerchantRepository {
  readonly merchants: Merchant[] = []

  async create(merchant: Merchant) {
    this.merchants.push(merchant)
    return merchant
  }

  async findById(id: string): Promise<Merchant | null> {
    const merchant = this.merchants.find((merchant) => merchant.id === id)
    return merchant ?? null
  }

  async findByParams({
    cnpj,
  }: findByParamsInterface): Promise<Merchant | null> {
    const user = this.merchants.find((user) => user.cnpj.value === cnpj)
    return user ?? null
  }
}
