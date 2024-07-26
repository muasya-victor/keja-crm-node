import mongoose, { Mongoose } from 'mongoose';

const connectToDB = (): Promise<Mongoose> => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb+srv://root:0795083960@blog-db.jx3yxok.mongodb.net/?retryWrites=true&w=majority&appName=blog-db')
            .then((db) => {
                console.log('MongoDB connected');
                resolve(db);
            })
            .catch((err) => {
                console.error('MongoDB connection error:', err);
                reject(err);
            });
    });
};

export default connectToDB;
