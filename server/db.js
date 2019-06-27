import mongoose from 'mongoose';

// mongoose customisations
mongoose.set('useFindAndModify', false);

// mongo db connection options
const defaultOptions = { useNewUrlParser: true };

// mongo db connection function
const connectToDB = (url, options = defaultOptions) => (
  mongoose.connect(url, options)
);

export default {
  connect: connectToDB,
};
