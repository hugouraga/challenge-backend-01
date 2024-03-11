import { Merchant } from '@/Domain/Entity/Merchant'

export interface MerchantRepository {
  create(merchant: Merchant): Promise<Merchant>
  findById(id: string): Promise<Merchant | null>
}
