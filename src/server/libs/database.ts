import mongoose from 'mongoose';

const MONGOURI = process.env.MONGO_URL || '';

export async function ConnectToDB() {
    InitConnection();
}

async function InitConnection() {
    await mongoose.connect(MONGOURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

mongoose.connection.on('connected', () => {
    console.log('Connected to DB.');
})

mongoose.connection.on('disconnected', () => {
    console.log('DB was disconnected, try reconnecting');
    setTimeout(InitConnection, 10000);
})