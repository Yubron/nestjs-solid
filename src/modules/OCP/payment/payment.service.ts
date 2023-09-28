import { Injectable } from '@nestjs/common';
import {
  BitcoinGateway,
  CreditCardGateway,
  PAYMENT_METHOD,
  PaymentGateway,
  PaypalGateway,
} from './payment.gateway';

@Injectable()
export class PaymentService {
  // ❌ BAD
  // Everytime we add a new payment method, we need to modify this method.
  public badProcessPayment(order: any, paymentMethod: PAYMENT_METHOD): string {
    if (paymentMethod === PAYMENT_METHOD.CREDIT_CARD) {
      // Process credit card payment
      return 'credit card';
    } else if (paymentMethod === PAYMENT_METHOD.PAYPAL) {
      // Process paypal payment
      return 'paypal';
    } else if (paymentMethod === PAYMENT_METHOD.BITCOIN) {
      // Process bitcoin payment
      return 'bitcoin';
    } else {
      throw new Error('Unsupported payment method!');
      // Handle other payment methods
    }
  }

  // ✅ GOOD
  // Every payment method has its own method.
  private paymentGateways: Record<string, PaymentGateway> = {};

  public registerPaymentGateway() {
    this.paymentGateways[PAYMENT_METHOD.CREDIT_CARD] = new CreditCardGateway();
    this.paymentGateways[PAYMENT_METHOD.PAYPAL] = new PaypalGateway();
    this.paymentGateways[PAYMENT_METHOD.BITCOIN] = new BitcoinGateway();
  }

  public goodProcessPayment(order: any, paymentMethod: PAYMENT_METHOD): void {
    const gateway = this.paymentGateways[paymentMethod];
    if (gateway) {
      const result = gateway.processPayment(order);
      return result;
    } else {
      throw new Error('Unsupported payment method!');
    }
  }
}
