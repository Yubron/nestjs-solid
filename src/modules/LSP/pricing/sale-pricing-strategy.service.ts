import { Injectable } from '@nestjs/common';
import { PricingService } from './pricing.service';

@Injectable()
export class BadSalePricingStrategy extends PricingService {
  public calculatePrice(basePrice: number) {
    return basePrice * 0.8;
  }
}

@Injectable()
export class SalePricingStrategy implements PricingService {
  public calculatePrice(basePrice: number) {
    return basePrice * 0.8;
  }
}
