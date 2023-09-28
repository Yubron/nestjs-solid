import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/SRP/auth/auth.module';
import { EmailModule } from './modules/SRP/email/email.module';
import { PaymentModule } from './modules/ocp/payment/payment.module';
import { PricingModule } from './modules/LSP/pricing/pricing.module';
import { NotificationsModule } from './modules/isp/notifications/notifications.module';
import { StorageModule } from './modules/dip/storage/storage.module';

@Module({
  imports: [AuthModule, EmailModule, PaymentModule, PricingModule, NotificationsModule, StorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
