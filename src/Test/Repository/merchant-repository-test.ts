import { MerchantRepository } from '../../Application/Repository/merchant-repositoty'
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
}
