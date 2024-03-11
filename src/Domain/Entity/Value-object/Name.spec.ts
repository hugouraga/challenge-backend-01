import { describe, expect, it } from 'vitest'
import { Name } from './Name'

describe('Name validation', () => {
  it.each(['John Doe', 'Mary Jane Smith', 'Anna Lee'])(
    `should return a valid name`,
    (name) => {
      const nameObject = new Name(name)
      expect(nameObject.value).toBe(name)
    },
  )

  it.each([['12345', 'John123 Doe', '  John Doe', 'John Doe  ']])(
    `should throw an error for invalid name`,
    (name) => {
      expect(() => new Name(name)).toThrow()
    },
  )
})
