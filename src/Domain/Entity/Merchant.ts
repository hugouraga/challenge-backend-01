import { randomUUID } from 'crypto'
import { Password } from './Value-object/Password'
import { CNPJ } from './Value-object/CNPJ'

export interface MerchantProps {
  id: string
  fantasyName: string
  cnpj: string
  password: string
}

export class Merchant {
  readonly id: string
  readonly cnpj: CNPJ
  readonly fantasyName: string
  private password: Password

  private constructor(
    id: string,
    fantasyName: string,
    cnpj: CNPJ,
    password: Password,
  ) {
    this.id = id
    this.fantasyName = fantasyName
    this.cnpj = cnpj
    this.password = password
  }

  static create({ fantasyName, cnpj, password }: Omit<MerchantProps, 'id'>) {
    const id = randomUUID()
    const newMerchant = new Merchant(
      id,
      fantasyName,
      new CNPJ(cnpj),
      new Password(password),
    )
    return newMerchant
  }
}
