import { Merchant } from '@/Domain/Entity/Merchant'

export interface findByParamsInterface {
  cnpj: string
}

export interface MerchantRepository {
  create(merchant: Merchant): Promise<Merchant>
  findById(id: string): Promise<Merchant | null>
  findByParams(params: findByParamsInterface): Promise<Merchant | null>
}
