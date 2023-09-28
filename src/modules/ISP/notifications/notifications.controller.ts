import { Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import {
  EmailNotification,
  Notification,
  PushNotification,
  SMSNotification,
} from './notification.interfaces';
@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Post('/bad-email')
  public badSendEmailNotification() {
    const badInterface: Notification = {
      to: 'test',
      subject: 'test',
      body: 'test',
      phoneNumber: 'test',
      message: 'test',
      userId: 'test',
      title: 'test',
    };
    return this.notificationsService.badSendEmailNotification(badInterface);
  }

  @Post('/email')
  public sendEmailNotification() {
    const notification: EmailNotification = {
      to: 'test',
      subject: 'test',
      body: 'test',
    };

    return this.notificationsService.sendEmailNotification(notification);
  }

  @Post('/sms')
  public sendSMSNotification() {
    const notification: SMSNotification = {
      phoneNumber: 'test',
      message: 'test',
    };

    return this.notificationsService.sendSMSNotification(notification);
  }

  @Post('/push')
  public sendPushNotification() {
    const notification: PushNotification = {
      userId: 'test',
      title: 'test',
      body: 'test',
    };

    return this.notificationsService.sendPushNotification(notification);
  }
}
