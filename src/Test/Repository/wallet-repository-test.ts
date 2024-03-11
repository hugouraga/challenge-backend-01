import { WalletRepository } from '../../Application/Repository/wallet-repository'
import { Wallet } from '../../Domain/Entity/Wallet'

export class InMemoryWalletRepository implements WalletRepository {
  private wallets: Wallet[] = []

  async create(wallet: Wallet): Promise<Wallet> {
    this.wallets.push(wallet)
    return wallet
  }

  async findByIdUser(idUser: string): Promise<Wallet | null> {
    const wallet = this.wallets.find((wallet) => wallet.idUser === idUser)
    return wallet ?? null
  }
}
