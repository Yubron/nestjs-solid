import { Controller, Get, Inject, Param } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { SalePricingStrategy } from './sale-pricing-strategy.service';
import { RegularPricingStrategy } from './regular-pricing-strategy.service';

@Controller('pricing')
export class PricingController {
  constructor(
    // @Inject(RegularPricingStrategy)
    @Inject(SalePricingStrategy)
    private pricingService: PricingService,
  ) {}

  @Get('/:basePrice')
  public getBasePrice(@Param('basePrice') basePrice: number) {
    return this.pricingService.calculatePrice(basePrice);
  }
}
