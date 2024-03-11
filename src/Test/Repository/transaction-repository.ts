import { TransactionRepository } from '../../Application/Repository/transaction-repository'
import { Transaction } from '../../Domain/Entity/Transaction'

export class InMemoryTransactionRepository implements TransactionRepository {
  private transactions: Transaction[] = []

  async create(transaction: Transaction): Promise<Transaction | null> {
    this.transactions.push(transaction)
    return transaction
  }
}
