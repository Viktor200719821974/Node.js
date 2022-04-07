import cron from 'node-cron';
import { userRepository } from '../repositories/user/userRepository';

export const getNewUsers = async () => {
    cron.schedule('* * 2 * * *', async () => {
        const newUsers = await userRepository.getNewUsers();
        console.log(newUsers);
    });
};
