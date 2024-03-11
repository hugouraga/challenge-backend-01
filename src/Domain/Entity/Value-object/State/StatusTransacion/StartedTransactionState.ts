// import { Transaction } from '@/Domain/Entity/Transaction'
import { FinisheTransactiondState } from './FinishedTransactionState'
import { StatusTransactionState } from './StatusTransactionState'

export class StartedTransactionState extends StatusTransactionState {
  private status = 'InProgress'

  getStatus(): string {
    return this.status
  }

  inProgress(): void {
    throw new Error('transaction is already in progress')
  }

  finished(): void {
    this.context?.transitionTo(new FinisheTransactiondState())
  }

  canceled(): void {
    throw new Error('Method not implemented.')
  }
}
