import mongoose from 'mongoose';

const editorSchema = new mongoose.Schema(
  {
    code: {
      type: String
    },
    type: {
      type: String,
      enum: ['javascript']
    }
  }
);

export default mongoose.model('editor', editorSchema);
