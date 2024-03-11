import { Transaction } from '@/Domain/Entity/Transaction'

export interface TransactionRepository {
  create(transaction: Transaction): Promise<Transaction | null>
}
