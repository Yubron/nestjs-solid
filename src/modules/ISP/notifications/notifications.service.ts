import { Injectable } from '@nestjs/common';
import {
  EmailNotification,
  Notification,
  PushNotification,
  SMSNotification,
} from './notification.interfaces';

@Injectable()
export class NotificationsService {
  // ❌ BAD
  public badSendEmailNotification(notification: Notification) {
    const params = {
      Source: 'no-reply@coderone.io',
      Destination: {
        ToAddresses: [notification.to],
      },
      Message: {
        Subject: {
          Data: notification.subject,
        },
        Body: {
          Text: {
            Data: notification.body,
          },
        },
      },
    };

    return 'Email sent, \n' + JSON.stringify(notification, null, 2);
  }

  // ✅ GOOD
  public sendEmailNotification(notification: EmailNotification) {
    // Logic to send email
    return 'Email sent, \n' + JSON.stringify(notification, null, 2);
  }

  public sendSMSNotification(notification: SMSNotification) {
    // Logic to send sms
    return 'SMS sent, \n' + JSON.stringify(notification, null, 2);
  }

  public sendPushNotification(notification: PushNotification) {
    // Logic to send push notification
    return 'PUSH sent, \n' + JSON.stringify(notification, null, 2);
  }
}
