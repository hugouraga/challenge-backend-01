export class Password {
  value: string
  private regexPassword =
    /^(?=.*[!@#$%^&*()-_+=])[A-Za-z0-9!@#$%^&*()-_+=]{8,}$/

  constructor(value: string) {
    const isValidPassowrd = this.validatePassoword(value)
    if (!isValidPassowrd) throw new Error('Invalid password')
    this.value = value
  }

  private validatePassoword(value: string) {
    return this.regexPassword.test(value)
  }
}
