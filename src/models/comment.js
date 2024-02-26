import mongoose from 'mongoose';



const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userId: {
        ype: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'  //we are using refPath
    }

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema); //This model name i.e. "Tweet" will become "Tweets" . Its default behaviour of ODMs and ORMs 
export default Comment;