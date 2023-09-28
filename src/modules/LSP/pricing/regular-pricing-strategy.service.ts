import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
export class BadRegularPricingStrategy extends PricingService {
  public calculatePrice(basePrice: number) {
    return basePrice;
  }
}

@Injectable()
export class RegularPricingStrategy implements PricingService {
  public calculatePrice(basePrice: number) {
    return basePrice;
  }
}
