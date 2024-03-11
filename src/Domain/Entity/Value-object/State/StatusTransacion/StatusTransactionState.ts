import { Transaction } from '@/Domain/Entity/Transaction'

export abstract class StatusTransactionState {
  protected context: Transaction | undefined
  public setContext(context: Transaction) {
    this.context = context
  }

  abstract getStatus(): string
  abstract inProgress(): void
  abstract finished(): void
  abstract canceled(): void
}
