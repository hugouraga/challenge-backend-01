export class Name {
  value: string
  private regexFullName = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/

  constructor(value: string) {
    const isValidFullName = this.validateFullName(value)
    if (!isValidFullName) throw new Error('Invalid Name')
    this.value = value
  }

  private validateFullName(value: string) {
    return this.regexFullName.test(value)
  }
}
