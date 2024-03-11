import { randomUUID } from 'crypto'

interface WalletProps {
  id: string
  idUser: string
  amount: number
  createdAt: Date
}

export class Wallet {
  readonly id
  readonly idUser
  private amount
  readonly createdAt

  private constructor(props: WalletProps) {
    this.id = props.id
    this.idUser = props.idUser
    this.amount = props.amount
    this.createdAt = props.createdAt
  }

  static create({ idUser }: Omit<WalletProps, 'id' | 'createdAt' | 'amount'>) {
    const wallet = new Wallet({
      id: randomUUID(),
      idUser,
      amount: 0,
      createdAt: new Date(),
    })

    return wallet
  }

  getBalance() {
    return this.amount
  }

  addBalance(amount: number) {
    this.amount += amount
    return amount
  }

  removeBalance(amount: number) {
    this.amount -= amount
  }
}
