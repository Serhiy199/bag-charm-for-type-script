import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URI: string | undefined = process.env.DB_URI;

if (!DB_URI) {
    console.error('DB_URI is not defined in environment variables');
    process.exit(1);
}

mongoose
    .connect(DB_URI)
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    });
