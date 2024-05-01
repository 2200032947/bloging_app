import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:codeforinterview@ac-jam6aaz-shard-00-00.zxdy9bm.mongodb.net:27017,ac-jam6aaz-shard-00-01.zxdy9bm.mongodb.net:27017,ac-jam6aaz-shard-00-02.zxdy9bm.mongodb.net:27017/?ssl=true&replicaSet=atlas-2s30q5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;