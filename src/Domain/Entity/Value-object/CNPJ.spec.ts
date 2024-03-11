import { describe, expect, it } from 'vitest'
import { CNPJ } from './CNPJ'

describe('CNPJ validation', () => {
  it.each(['58.171.147/0001-24', '29.085.064/0001-14'])(
    'must test valid cnpj',
    (cnpj) => {
      const cnpjObject = new CNPJ(cnpj)
      expect(cnpjObject.value).toBe(cnpj)
    },
  )

  it.each(['000.000.000-00', '000.000.000-00   ', '999.999.999-99'])(
    `should throw an error for invalid cnpj`,
    (cnpj) => {
      expect(() => new CNPJ(cnpj)).toThrow()
    },
  )
})
