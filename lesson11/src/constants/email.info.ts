import { EmailActionEnum } from './enums';

export const emailInfo = {
    [EmailActionEnum.WELCOME]: {
        subject: 'Welcome to Node.js',
        html: 'Hello this is welcome mail',
    },
    [EmailActionEnum.ACCOUNT_BLOCKED]: {
        subject: 'You account was blocked',
        html: 'Oops account was blocked',
    },
};
