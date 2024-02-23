const express = require('express');
const connect = require('./config/database');
const app = express();

const { TweetRepository } = require('./repository/index');
const TweetService = require('./services/tweet-service');


app.listen(3000, async () => {
    console.log("Server started on PORT: 3000 ");
    await connect();
    console.log("MondoDB connected");
    let service = new TweetService();
    const tweet = service.create({ content: "This is after #processing really #Excited , it is going to be #fun" });
    console.log(tweet);
});


