const { HashtagRepository } = require('../repository');
const { TweetRepository } = require('../repository/tweet-repository/index')

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-z0-9]+/g);  //this regular expression helps to extract words with hashtag in a tweet
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}
module.exports = TweetService;