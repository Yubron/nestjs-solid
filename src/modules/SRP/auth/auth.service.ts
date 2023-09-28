import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(
    // this is bad
    private emailService: EmailService,
  ) {}
  // ✅ GOOD
  // signIn method do one thing.
  public async signIn() {
    console.log('create user');
    return 1;
  }

  // ❌ BAD, because this is signIn method.
  // but it also send email.
  // so this method has another responsibility
  public async badSignIn() {
    console.log('create user');
    const userId = 1;

    this.emailService.sendWelcomeEmail(userId);
  }
}
