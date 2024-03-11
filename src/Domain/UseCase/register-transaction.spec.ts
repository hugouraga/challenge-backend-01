import { describe, it, beforeEach } from 'vitest'
import { RegisterTransactionUseCase } from './register-transaction'

import { User } from '../Entity/User'
import { Wallet } from '../Entity/Wallet'
import { Merchant } from '../Entity/Merchant'

import { UserRepository } from '../../Application/Repository/user-repository'
import { MerchantRepository } from '../../Application/Repository/merchant-repositoty'
import { PaymentAutorizationGatewayInteraface } from '../../Application/Gateway/payment-authorization-gateway-interface'
import { WalletRepository } from '../../Application/Repository/wallet-repository'
import { TransactionRepository } from '../../Application/Repository/transaction-repository'

import { InMemoryTransactionRepository } from '../../Test/Repository/transaction-repository'
import { InMemoryWalletRepository } from '../../Test/Repository/wallet-repository-test'
import { InMemoryMerchantRepository } from '../../Test/Repository/merchant-repository-test'
import { InMemoryUserRepository } from '../../Test/Repository/user-repository-test'
import { TestPaymentAutorizationGateway } from '../../Test/Gateway/payment-authorization-gateway-test'

describe('create transaction', () => {
  let UserRepository: UserRepository
  let walletRepository: WalletRepository
  let merchantRepository: MerchantRepository
  let transactionRepository: TransactionRepository
  let paymentAuthorizationGateway: PaymentAutorizationGatewayInteraface

  beforeEach(() => {})

  it('should be able to create transaction', async () => {
    UserRepository = new InMemoryUserRepository()
    walletRepository = new InMemoryWalletRepository()
    merchantRepository = new InMemoryMerchantRepository()
    transactionRepository = new InMemoryTransactionRepository()
    paymentAuthorizationGateway = new TestPaymentAutorizationGateway()

    const user = User.create({
      cpf: '404.600.360-09',
      name: 'John Doe',
      email: 'JohnDoe@gmail.com',
      password: 'teste@JohnDoe',
    })
    await UserRepository.create(user)

    const wallet = Wallet.create({ idUser: user.id })
    await walletRepository.create(wallet)
    wallet.addBalance(150)

    const merchant = Merchant.create({
      fantasyName: 'John Doe Enterprise',
      cnpj: '58.171.147/0001-24',
      password: 'test@JohnDoeEnterprise',
    })
    const walletMerchant = Wallet.create({ idUser: merchant.id })
    await walletRepository.create(walletMerchant)
    await merchantRepository.create(merchant)

    const createTransactionUseCase = new RegisterTransactionUseCase(
      UserRepository,
      merchantRepository,
      walletRepository,
      paymentAuthorizationGateway,
    )

    const transaction = await createTransactionUseCase.execute({
      idUserSending: user.id,
      idReceiving: merchant.id,
      typeReceiving: 'merchant',
      value: 100,
    })

    await transactionRepository.create(transaction)
  })
})
