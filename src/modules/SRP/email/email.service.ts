import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  public sendWelcomeEmail(userId: number) {
    console.log(`sendEmail to ${userId}`);
  }
}
