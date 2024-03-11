import { randomUUID } from 'crypto'
import { StatusTransactionState } from './Value-object/StatusTransacion/StatusTransactionState'
import { StartedTransactionState } from './Value-object/StatusTransacion/StartedTransactionState'

export interface TransactionProps {
  id: string
  idUserSending: string
  idReceiving: string
  amount: number
  createdAt: Date
}

export class Transaction {
  readonly id
  readonly idUserSending
  readonly idReceiving
  private amount
  private state: StatusTransactionState | undefined
  readonly createdAt

  private constructor(
    id: string,
    idUserSending: string,
    idReceiving: string,
    amount: number,
    createdAt: Date,
    state: StatusTransactionState,
  ) {
    this.id = id
    this.idUserSending = idUserSending
    this.idReceiving = idReceiving
    this.amount = amount
    this.createdAt = createdAt
    this.transitionTo(state)
  }

  static create({
    idUserSending,
    idReceiving,
    amount,
  }: Omit<TransactionProps, 'id' | 'createdAt' | 'status' | 'state'>) {
    const id = randomUUID()
    const createdAt = new Date()
    const transaction = new Transaction(
      id,
      idUserSending,
      idReceiving,
      amount,
      createdAt,
      new StartedTransactionState(),
    )

    return transaction
  }

  public transitionTo(state: StatusTransactionState): void {
    this.state = state
    this.state.setContext(this)
  }

  getStatus(): string {
    return this.state?.getStatus() ?? ''
  }

  inProgress() {
    return this.state?.inProgress()
  }

  finished() {
    return this.state?.finished()
  }

  canceled() {
    return this.state?.canceled()
  }
}
