import axios from 'axios'
import {
  CheckAuthorizationResponse,
  PaymentAutorizationGatewayInteraface,
} from '@/Application/Gateway/payment-authorization-gateway-interface'
export class PaymentAutorizationGateway
  implements PaymentAutorizationGatewayInteraface
{
  async checkAuthorization(): Promise<CheckAuthorizationResponse> {
    const checkAuthorizationResponse = await axios.get(
      'https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc',
    )
    if (checkAuthorizationResponse.status !== 200)
      throw new Error(
        JSON.stringify(checkAuthorizationResponse.data) +
          ' status: ' +
          checkAuthorizationResponse.status,
      )
    const checkAuthorizationOutput: CheckAuthorizationResponse =
      checkAuthorizationResponse.data
    return checkAuthorizationOutput
  }
}
