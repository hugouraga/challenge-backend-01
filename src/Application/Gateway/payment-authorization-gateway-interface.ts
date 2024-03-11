export interface CheckAuthorizationResponse {
  message: string
}

export interface PaymentAutorizationGatewayInteraface {
  checkAuthorization(): Promise<CheckAuthorizationResponse>
}
