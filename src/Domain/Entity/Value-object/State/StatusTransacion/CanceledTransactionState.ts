import { StatusTransactionState } from './StatusTransactionState'

export class CanceledTransactionState extends StatusTransactionState {
  private status = 'Canceled'

  getStatus(): string {
    return this.status
  }

  inProgress(): void {
    throw new Error('cannot return to initiated status')
  }

  finished(): void {
    throw new Error('transaction is already in progress')
  }

  canceled(): void {
    throw new Error('Method not implemented.')
  }
}
