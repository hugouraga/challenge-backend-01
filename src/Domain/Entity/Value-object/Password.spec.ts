import { describe, expect, it } from 'vitest'
import { Password } from './Password'

describe('password validation', () => {
  it.each(['test@1234', 'test@test1'])(
    `should return a valid password`,
    (password) => {
      const passwordObject = new Password(password)
      expect(passwordObject.value).toBe(password)
    },
  )

  it.each(['1234567', 'testtest', 'examplepassword'])(
    `should throw an error for invalid password`,
    (password) => {
      expect(() => new Password(password)).toThrow()
    },
  )
})
