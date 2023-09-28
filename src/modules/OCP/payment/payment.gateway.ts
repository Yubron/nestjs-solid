export abstract class PaymentGateway {
  abstract processPayment(order: any): void;
}

export class CreditCardGateway implements PaymentGateway {
  processPayment(order: any): string {
    return 'credit card';
    // Process Credit card payment
  }
}

export class PaypalGateway implements PaymentGateway {
  processPayment(order: any): string {
    return 'paypal';
    // Process Paypal payment
  }
}

export class BitcoinGateway implements PaymentGateway {
  processPayment(order: any): string {
    return 'bitcoin';
    // Process Bitcoin payment
  }
}

// if new payment method is added, we just need to create a new class
// export class ApplePayGateway implements PaymentGateway {
//   processPayment(order: any): void {
//     // Process ApplePay payment
//   }
// }

export enum PAYMENT_METHOD {
  CREDIT_CARD = 'credit-card',
  PAYPAL = 'paypal',
  BITCOIN = 'bitcoin',
}
