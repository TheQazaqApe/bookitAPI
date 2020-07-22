import { DB } from './server/libs';
import StartServer from './server/app';

(async () => {
    ['MONGO_URL'].forEach(item => {
        const value = process.env[item];
        if (value === '' || value == undefined || value === null) {
            throw new Error('Incorrect environmental variables');
        }
    });
    await DB.ConnectToDB();
    StartServer();
})();