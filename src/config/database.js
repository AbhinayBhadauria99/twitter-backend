import mongoose from 'mongoose';
export const connect = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/twitter_dev'); //sample_dev is the collection which we want to make
}

