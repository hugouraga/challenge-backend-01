import { beforeEach, describe, expect, it } from 'vitest'
import { Wallet } from './Wallet'

describe('Testing Wallet', () => {
  beforeEach(() => {})

  it('Shoulde be able to create wallet', () => {
    const wallet = Wallet.create({
      idUser: '1',
    })
    expect(wallet.id).toBeDefined()
    expect(wallet.idUser).toBe('1')
    expect(wallet.getBalance()).toBe(0)
  })
})
