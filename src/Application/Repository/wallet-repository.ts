import { Wallet } from '@/Domain/Entity/Wallet'

export interface WalletRepository {
  create(wallet: Wallet): Promise<Wallet>
  findByIdUser(id: string): Promise<Wallet | null>
}
