import { PaymentAutorizationGatewayInteraface } from '@/Application/Gateway/payment-authorization-gateway-interface'
import { MerchantRepository } from '@/Application/Repository/merchant-repositoty'
import { UserRespository } from '@/Application/Repository/user-repository'
import { User } from '../Entity/User'
import { Merchant } from '../Entity/Merchant'
import { WalletRepository } from '@/Application/Repository/wallet-repository'
import { Transaction } from '../Entity/Transaction'

interface RegisterTransactionUseCaseRequest {
  idUserSending: string
  idReceiving: string
  typeReceiving: 'user' | 'merchant'
  value: number
}

export class RegisterTransactionUseCase {
  constructor(
    private userRespository: UserRespository,
    private merchantRepository: MerchantRepository,
    private walletRepository: WalletRepository,
    private paymentAuthorizationGateway: PaymentAutorizationGatewayInteraface,
  ) {}

  async execute({
    idUserSending,
    idReceiving,
    typeReceiving,
    value,
  }: RegisterTransactionUseCaseRequest) {
    const user = await this.userRespository.findById(idUserSending)
    if (!user) throw new Error('User not found')
    const userWallet = await this.walletRepository.findByIdUser(user.id)
    if (!userWallet) throw new Error('Wallet not found')
    if (userWallet.getBalance() < value) throw new Error('insufficient funds')
    let receiver: User | Merchant | null
    if (typeReceiving === 'user') {
      receiver = await this.userRespository.findById(idReceiving)
    } else {
      receiver = await this.merchantRepository.findById(idReceiving)
    }
    if (!receiver) throw new Error('Receiver not found')
    const receiverWallet = await this.walletRepository.findByIdUser(receiver.id)
    if (!receiverWallet) throw new Error('Receiver does not have a wallet')

    const isAuthorizedTransfer =
      await this.paymentAuthorizationGateway.checkAuthorization()
    if (isAuthorizedTransfer.message !== 'Autorizado')
      throw new Error('unauthorized transfer')

    const transaction = Transaction.create({
      idUserSending,
      idReceiving,
      amount: value,
    })

    return transaction
  }
}
