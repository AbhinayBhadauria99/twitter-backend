const express = require('express');
const connect = require('./config/database');
const app = express();

const HashtagRepository = require('./repository/hashtag-repository');



app.listen(3000, async () => {
    console.log("Server started on PORT: 3000 ");
    await connect();
    console.log("MondoDB connected");
    let repo = new HashtagRepository();
    /*   await repo.bulkCreate([
           {
               title: 'Trend',
               tweets: []
           },
           {
               title: 'Excited',
               tweets: []
           },
           {
               title: 'Python',
               tweets: []
           },
           {
               title: 'Fun',
               tweets: []
           }
       ]);     */

    const response = await repo.findByName(['Excited', 'Trend']);
    console.log(response);
});


