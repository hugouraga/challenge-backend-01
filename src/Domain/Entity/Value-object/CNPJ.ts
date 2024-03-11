export class CNPJ {
  value: string
  regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/

  constructor(value: string) {
    const isValidCNPJ = this.validateCNPJ(value)
    if (!isValidCNPJ) throw new Error('Invalid CNPJ')
    this.value = value
  }

  private validateCNPJ(value: string) {
    return this.regexCNPJ.test(value)
  }
}
