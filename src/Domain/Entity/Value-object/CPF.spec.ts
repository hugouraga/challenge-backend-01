import { describe, expect, it } from 'vitest'
import { CPF } from './CPF'

describe('Cpf validation', () => {
  it.each([['404.600.360-09', '681.646.300-55']])(
    `should return a valid cpf`,
    (cpf) => {
      const cpfObject = new CPF(cpf)
      expect(cpfObject.value).toBe(cpf)
    },
  )

  it.each([['000.000.000-00', '000.000.000-00   ', '999.999.999-99']])(
    `should throw an error for invalid cpf`,
    (cpf) => {
      expect(() => new CPF(cpf)).toThrow()
    },
  )
})
