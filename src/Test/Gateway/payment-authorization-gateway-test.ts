import {
  CheckAuthorizationResponse,
  PaymentAutorizationGatewayInteraface,
} from '@/Application/Gateway/payment-authorization-gateway-interface'
export class TestPaymentAutorizationGateway
  implements PaymentAutorizationGatewayInteraface
{
  async checkAuthorization(): Promise<CheckAuthorizationResponse> {
    return {
      message: 'Autorizado',
    }
  }
}
