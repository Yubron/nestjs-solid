import { Module } from '@nestjs/common';
import { PricingController } from './pricing.controller';
import { RegularPricingStrategy } from './regular-pricing-strategy.service';
import { SalePricingStrategy } from './sale-pricing-strategy.service';

@Module({
  providers: [RegularPricingStrategy, SalePricingStrategy],
  controllers: [PricingController],
})
export class PricingModule {}
