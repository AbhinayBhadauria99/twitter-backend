import Tweet from '../models/tweet.js';
class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean();  //lean converts response from mongoose object to JS Object
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }



    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit); //offset will skip first two tweet and limit will tell how much tweets to display
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;