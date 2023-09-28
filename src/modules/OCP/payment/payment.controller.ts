import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {
    this.paymentService.registerPaymentGateway();
  }

  @Post('/')
  public processPayment(@Body() body: any) {
    const order = {
      id: 1,
      amount: 100,
    };

    return this.paymentService.goodProcessPayment(order, body.paymentMethod);
  }
}
