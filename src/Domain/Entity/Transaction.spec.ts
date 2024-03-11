import { Transaction } from './Transaction'
import { expect, describe, it } from 'vitest'

describe('Testing Transaction', async () => {
  it('should create a transaction', () => {
    const transaction = Transaction.create({
      idUserSending: '1',
      idReceiving: '1',
      amount: 10,
    })
    expect(transaction.getStatus()).toBe('InProgress')
  })
})
