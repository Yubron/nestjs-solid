import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailService } from '../email/email.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private emailService: EmailService,
  ) {}

  // GOOD
  @Post('/good-sign-in')
  public async register() {
    const newUserId = await this.authService.signIn();

    this.emailService.sendWelcomeEmail(newUserId);

    return newUserId;
  }

  // BAD
  @Post('/bad-sign-in')
  public async badRegister() {
    const newUserId = await this.authService.badSignIn();

    return newUserId;
  }
}
