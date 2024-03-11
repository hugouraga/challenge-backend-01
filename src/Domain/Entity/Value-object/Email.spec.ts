import { describe, expect, it } from 'vitest'
import { Email } from './Email'

describe('Email validation', () => {
  it.each(['JohnDoe@gmail.com', 'MaryJaneSmith@gmail.com'])(
    `should return a valid email`,
    (email) => {
      const emailObject = new Email(email)
      expect(emailObject.value).toBe(email)
    },
  )

  it.each(['12345@.com', 'John1231@testeDoe', '!@JohnDoe', 'JohnDoe@  '])(
    `should throw an error for invalid email`,
    (email) => {
      expect(() => new Email(email)).toThrow()
    },
  )
})
