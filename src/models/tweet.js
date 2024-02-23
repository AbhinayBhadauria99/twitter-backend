import mongoose from "mongoose";


//schema basically represent structure of JSON Document we will use as database
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    }

}, { timestamps: true });


const Tweet = mongoose.model('Tweet', tweetSchema); //This model name i.e. "Tweet" will become "Tweets" . Its default behaviour of ODMs and ORMs 
export default Tweet;