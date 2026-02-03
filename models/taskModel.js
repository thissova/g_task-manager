import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  role: {
    type: String,
    default: 'user',
  },
});

const User = mongoose.model('Task', taskSchema);

export default User;
