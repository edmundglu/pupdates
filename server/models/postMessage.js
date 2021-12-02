import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  text: String,
  creator: String,
  name: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//turn a schema to a model
const PostMessage = mongoose.model('PostMessage', postSchema);

//exporting a mongoose model from postmessage file
//to use for CRUD
export default PostMessage;
