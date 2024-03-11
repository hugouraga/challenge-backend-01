export class Email {
  value: string
  private regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  constructor(value: string) {
    const isValidEmail = this.validateEmail(value)
    if (!isValidEmail) throw new Error('Invalid email')
    this.value = value
  }

  private validateEmail(value: string) {
    return this.regexEmail.test(value)
  }
}
