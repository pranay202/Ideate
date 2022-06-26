import mongoose from 'mongoose';
const Connection = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URL;
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
            // useFindAndModify: false,
        });       
        console.log("Database Connection Successful!");
    } catch (error) {
        console.log("Database Connection failed: ",error);
    }
};

export default Connection;
