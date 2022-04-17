import { EmailActionEnum } from './enums';

export const emailInfo = {
    [EmailActionEnum.WELCOME]: {
        subject: 'Welcome to Node.js',
        templateName: 'welcome',
    },
    [EmailActionEnum.ACCOUNT_BLOCKED]: {
        subject: 'You account was blocked',
        templateName: 'accountBlocked',
    },
};
